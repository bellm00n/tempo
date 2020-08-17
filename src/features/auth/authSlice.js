import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    signUp(state, action) {
      return (dispatch) => {
        // dispatch
      };
    },
    signIn: {},
    logOut: {},
  },
});

export const { signUp, signIn, logOut } = authSlice.actions;

export default authSlice.reducer;
