import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ROUTER_PARAMS } from "../constants/constants";
import {
  filterMoviesData,
  getMovieData,
  sortMoviesData,
} from "../store/moviesActions";
import { uiActions } from "../store/uiSlice";

export const useCustomRouting = (searchParams) => {
  const dispatch = useDispatch();
  const sortParam = searchParams[ROUTER_PARAMS.SORT_BY];
  const genreParam = searchParams[ROUTER_PARAMS.GENRE_PARAM];
  const movieParam = searchParams[ROUTER_PARAMS.MOVIE_PARAM];

  useEffect(() => {
    if (sortParam) {
      dispatch(sortMoviesData(sortParam));
      return;
    }

    if (genreParam) {
      dispatch(filterMoviesData(genreParam));
      return;
    }

    if (movieParam) {
      dispatch(getMovieData(movieParam));
      dispatch(uiActions.hideHeader());
      return;
    }
  }, [searchParams]);
};
