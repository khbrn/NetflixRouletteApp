import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    [moviesSlice.name]: moviesSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
  },
});

export default store;
