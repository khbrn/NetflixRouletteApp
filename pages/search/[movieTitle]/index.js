import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import MoviesSearchContainer from "../../../src/components/MoviesSearchContainer/MoviesSearchContainer";
import { moviesActions } from "../../../src/store/moviesSlice";
import { MoviesService } from "../../../src/services/MoviesService";
import MovieDetails from "../../../src/components/MovieDetails/MovieDetails";

const MovieSearchPage = (props) => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchQuery = router.query.movieTitle;

  dispatch(moviesActions.loadMovies({ movies: props.moviesData }));

  return (
    <header>
      {!isHeaderVisible ? (
        <MovieDetails />
      ) : (
        <MoviesSearchContainer searchQquery={searchQuery} />
      )}
    </header>
  );
};

export async function getStaticPaths() {
  const moviesData = await MoviesService.loadMovies();
  return {
    fallback: false,
    paths: moviesData.map((movie) => ({
      params: { movieTitle: movie.title.toLowerCase() },
    })),
  };
}

export async function getStaticProps(context) {
  const queryTitle = context.params.movieTitle;
  const fetchedMoviesData = await MoviesService.searchMovies(queryTitle);

  return {
    props: {
      moviesData: fetchedMoviesData,
    },
  };
}

MovieSearchPage.propTypes = {
  moviesData: PropTypes.array,
};

export default MovieSearchPage;
