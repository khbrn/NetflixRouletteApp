import { MoviesService } from "../services/MoviesService";
import { moviesActions } from "./moviesSlice";

export const fetchMoviesData = () => {
  return async (dispatch) => {
    const fetchedMoviesData = await MoviesService.loadMovies();
    dispatch(moviesActions.loadMovies({ movies: fetchedMoviesData }));
  };
};

export const searchMoviesData = (query) => {
  return async (dispatch) => {
    const moviesData = await MoviesService.searchMovies(query);
    dispatch(moviesActions.searchMovies({ movies: moviesData }));
  };
};

export const sortMoviesData = (field) => {
  return async (dispatch) => {
    const moviesData = await MoviesService.sortMovies(field);
    dispatch(moviesActions.sortMovies({ movies: moviesData }));
  };
};
