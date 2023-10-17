import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  jwt: "",
};

const authSLice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, data) => {
      state.isLoggedIn = true;
      state.jwt = data.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.jwt = "";
    },
  },
});

export const { login } = authSLice.actions;

export default authSLice.reducer;
