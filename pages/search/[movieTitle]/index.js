import React from "react";
import { useRouter } from "next/router";

import MoviesSearchContainer from "../../../src/components/MoviesSearchContainer/MoviesSearchContainer";

const MovieSearchResult = () => {
  const router = useRouter();
  const searchQuery = router.query.movieTitle;

  return <MoviesSearchContainer searchQuery={searchQuery} />;
};

export default MovieSearchResult;
