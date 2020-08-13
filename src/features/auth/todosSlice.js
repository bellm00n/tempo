import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    signUp: {},
    signIn: {},
    logOut: {},
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
