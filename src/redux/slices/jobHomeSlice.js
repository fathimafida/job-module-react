import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axioxClient";

const initialState = {
  jobList: [],
  status: "idle",
  selectedJob: null,
};

export const getHomeData = createAsyncThunk(
  "jobHome/getHomeData",
  async ({ token, search }) => {
    const response = await axiosClient.get("/job/posts", {
      headers: { Authorization: `Bearer ${token}` },
      params: { search: search },
    });
    return response.data;
  }
);

export const getJobDetails = createAsyncThunk(
  "jobHome/getJobDetails",
  async ({ token, id }) => {
    const response = await axiosClient.get(`/job/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);
const jobHomeSlice = createSlice({
  name: "jobHome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.status = "success";
        state.jobList = action.payload;
      })
      .addCase(getHomeData.rejected, (state) => {
        state.status = "failure";
      })

      .addCase(getJobDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getJobDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedJob = action.payload;
      })

      .addCase(getJobDetails.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default jobHomeSlice.reducer;
