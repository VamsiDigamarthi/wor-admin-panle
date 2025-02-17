import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isDisplayModal: boolean;
}

const initialState: ModalState = {
  isDisplayModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCloseModalFunc: (state) => {
      state.isDisplayModal = !state.isDisplayModal;
    },
  },
});

export const { openCloseModalFunc } = modalSlice.actions;

export default modalSlice.reducer;
