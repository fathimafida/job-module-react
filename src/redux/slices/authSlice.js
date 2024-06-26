import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axioxClient";
const initialState = {
  user: null,
  status: "idle", //"idle" //"success" //'failure'
};

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/user/login/", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors ?? "Login Failed");
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    loadUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.user = user;
      }
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginWithEmailAndPassword.rejected, (state) => {
        state.status = "failure";
      });
  },
});


export default authSlice.reducer;

export const { logOut , loadUser } = authSlice.actions;
