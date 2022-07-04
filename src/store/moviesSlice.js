import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  currentMovie: {},
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
    searchMovies(state, action) {
      state.movies = action.payload.movies;
      state.moviesNumber = state.movies ? state.movies.length : 0;
    },
    sortMovies(state, action) {
      state.movies = action.payload.movies;
      state.moviesNumber = state.movies ? state.movies.length : 0;
    },
    filterMovies(state, action) {
      state.movies = action.payload.movies;
      state.moviesNumber = state.movies ? state.movies.length : 0;
    },
    setCurrentMovie(state, action) {
      state.currentMovie = action.payload.movie;
    },
    deleteMovie(state, action) {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.moviesNumber = state.movies ? state.movies.length : 0;
    },
    addMovie(state, action) {
      state.movies.unshift(action.payload.movie);
      state.moviesNumber = state.movies ? state.movies.length : 0;
    },
    editMovie(state, action) {
      let movieToEditIndex = state.movies.findIndex(
        (movie) => movie.id === action.payload.movie.id
      );
      state.movies.splice(movieToEditIndex, 1);
      state.movies.splice(movieToEditIndex, 0, action.payload.movie);
    },
  },
});

export default moviesSlice;
export const moviesActions = moviesSlice.actions;
