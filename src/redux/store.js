import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import jobHomeSlice from "./slices/jobHomeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobHome: jobHomeSlice,
  },
  devTools: true,
});

export default store;
