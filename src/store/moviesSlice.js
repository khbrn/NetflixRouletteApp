import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  moviesNumber: 0,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadMovies(state, action) {
      state.movies = action.payload.movies;
      state.moviesNumber = state.movies ? state.movies.length : 0;
    },
  },
});

export default moviesSlice;
export const moviesActions = moviesSlice.actions;
