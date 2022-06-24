import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { movies: moviesSlice.reducer, ui: uiSlice.reducer },
});

export default store;
