import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isHeaderVisible: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    hideHeader(state) {
      state.isHeaderVisible = false;
    },
    showHeader(state) {
      state.isHeaderVisible = true;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
