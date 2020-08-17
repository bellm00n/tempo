import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",
  initialState: { currentModal: null },
  reducers: {
    changeModal(state, action) {
      state.currentModal = action.payload;
    },
  },
});

export const { changeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
