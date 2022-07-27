import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import MovieDetails from "../../src/components/MovieDetails/MovieDetails";
import MoviesSearchContainer from "../../src/components/MoviesSearchContainer/MoviesSearchContainer";
import { moviesActions } from "../../src/store/moviesSlice";
import { MoviesService } from "../../src/services/MoviesService";
import { ROUTER_PARAMS } from "../../src/constants/constants";
import { uiActions } from "../../src/store/uiSlice";

const SearchPage = (props) => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const dispatch = useDispatch();
  const router = useRouter();

  const filterParam = router.query[ROUTER_PARAMS.GENRE_PARAM];
  const sortParam = router.query[ROUTER_PARAMS.SORT_BY];
  const movieParam = router.query[ROUTER_PARAMS.MOVIE_PARAM];

  if (!router.query.length) {
    dispatch(moviesActions.loadMovies({ movies: props.popularMoviesData }));
  }

  if (filterParam) {
    dispatch(moviesActions.loadMovies({ movies: props.filteredMoviesData }));
  }

  if (sortParam) {
    dispatch(moviesActions.loadMovies({ movies: props.sortedMoviesData }));
  }

  if (movieParam) {
    dispatch(moviesActions.getMovie({ movie: props.movieData }));
    dispatch(uiActions.hideHeader());
  }

  return (
    <header>
      {!isHeaderVisible ? <MovieDetails /> : <MoviesSearchContainer />}
    </header>
  );
};

export async function getServerSideProps(context) {
  const filterQuery = context.query[ROUTER_PARAMS.GENRE_PARAM];
  const sortQuery = context.query[ROUTER_PARAMS.SORT_BY];
  const movieQuery = context.query[ROUTER_PARAMS.MOVIE_PARAM];

  const popularMoviesData = await MoviesService.loadMovies();
  const filteredMoviesData = await MoviesService.filterMovies(filterQuery);
  const sortedMoviesData = await MoviesService.sortMovies(sortQuery);
  const movieData = movieQuery ? await MoviesService.getMovie(movieQuery) : [];

  return {
    props: {
      popularMoviesData,
      filteredMoviesData,
      sortedMoviesData,
      movieData,
    },
  };
}

SearchPage.propTypes = {
  popularMoviesData: PropTypes.array,
  filteredMoviesData: PropTypes.array,
  sortedMoviesData: PropTypes.array,
  movieData: PropTypes.array,
};

export default SearchPage;
