import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onModal: false,
  children: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.onModal = true;
      state.children = action.payload;
    },
    closeModal: (state) => {
      state.onModal = false;
      state.children = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
