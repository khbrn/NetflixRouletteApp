import React from "react";

import "./Header.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import { useSelector } from "react-redux";
import MoviesSearchContainer from "../MoviesSearchContainer/MoviesSearchContainer";

const Header = () => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);

  return (
    <header>
      {!isHeaderVisible ? <MovieDetails /> : <MoviesSearchContainer />}
    </header>
  );
};

export default Header;
