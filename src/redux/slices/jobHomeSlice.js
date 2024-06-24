import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axioxClient";

const initialState = {
  jobList: [],
  status: "idle",
  
};

export const getHomeData = createAsyncThunk(
  "jobHome/getHomeData",
  async (token) => {
    const response = await axiosClient.get("/job/posts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const jobHomeSlice = createSlice({
  name: "jobHome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.status = "success";
      state.jobList = action.payload;
    });
    builder.addCase(getHomeData.rejected, (state) => {
      state.status = "failure";
    });
  },
});

export default jobHomeSlice.reducer;
