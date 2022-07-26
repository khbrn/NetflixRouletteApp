import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import MovieDetails from "../../src/components/MovieDetails/MovieDetails";
import MoviesSearchContainer from "../../src/components/MoviesSearchContainer/MoviesSearchContainer";
import { useCustomRouting } from "../../src/hooks/useCustomRouting";

const HomePage = () => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const router = useRouter();
  const searchQuery = router.query.movieTitle;

  useCustomRouting(router.query);

  return (
    <header>
      {!isHeaderVisible ? (
        <MovieDetails />
      ) : (
        <MoviesSearchContainer searchQuery={searchQuery} />
      )}
    </header>
  );
};

export default HomePage;
