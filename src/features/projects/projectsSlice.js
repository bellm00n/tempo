import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject(state, action) {},
    fetchProjects(state, action) {},
  },
});

export const { changeModal } = projectsSlice.actions;

export default projectsSlice.reducer;
