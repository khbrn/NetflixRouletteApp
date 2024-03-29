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
    dispatch(moviesActions.loadMovies({ movies: moviesData }));
  };
};

export const sortMoviesData = (field) => {
  return async (dispatch) => {
    const moviesData = await MoviesService.sortMovies(field);
    dispatch(moviesActions.loadMovies({ movies: moviesData }));
  };
};

export const filterMoviesData = (genre) => {
  return async (dispatch) => {
    const moviesData = await MoviesService.filterMovies(genre);
    dispatch(moviesActions.loadMovies({ movies: moviesData }));
  };
};

export const deleteMovieData = (id) => {
  return async (dispatch) => {
    await MoviesService.deleteMovie(id);
    dispatch(moviesActions.deleteMovie({ id }));
  };
};

export const addMovieData = (movie) => {
  return async (dispatch) => {
    const movieData = await MoviesService.addMovie(movie);
    dispatch(moviesActions.addMovie({ movie: movieData }));
  };
};

export const editMovieData = (movie) => {
  return async (dispatch) => {
    const movieData = await MoviesService.editMovie(movie);
    dispatch(moviesActions.editMovie({ movie: movieData }));
  };
};

export const getMovieData = (movieId) => {
  return async (dispatch) => {
    const movieData = await MoviesService.getMovie(movieId);
    dispatch(moviesActions.getMovie({ movie: movieData }));
  };
};
