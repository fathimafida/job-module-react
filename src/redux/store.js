import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobHomeSlice from "./slices/jobHomeSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        jobHome:jobHomeSlice

    },
})

export default store