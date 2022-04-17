import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    user: null,
    isSignedIn: false,
    isSignedOut: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    userSignedIn: (state) => {
      state.isSignedIn = true;
      state.isSignedOut = false;
    },
    userSignedOut: (state) => {
      state.isSignedIn = false;
      state.isSignedOut = true;
    },
  },
});

export const { login, logout, userSignedIn, userSignedOut } = userSlice.actions;

export const selectUser = (state) => state.userData.user;

export default userSlice.reducer;
