import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import authReducer from "../slice/authSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    authReducer,
  },
});
