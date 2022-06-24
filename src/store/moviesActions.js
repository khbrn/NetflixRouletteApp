import { MoviesService } from "../services/MoviesService";
import { moviesActions } from "./moviesSlice";

export const fetchMoviesData = () => {
  return async (dispatch) => {
    const fetchedMoviesData = await MoviesService.loadMovies();
    dispatch(moviesActions.loadMovies({ movies: fetchedMoviesData }));
  };
};
