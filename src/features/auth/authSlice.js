import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoading: true },
  reducers: {
    signUp: {},
    signIn: {},
    logOut: {},
  },
});

export const { addTodo, toggleTodo } = authSlice.actions;

export default authSlice.reducer;
