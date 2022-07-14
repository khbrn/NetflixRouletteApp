import React from "react";
import { useParams } from "react-router-dom";

import "./Header.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import { useSelector } from "react-redux";
import MoviesSearchContainer from "../MoviesSearchContainer/MoviesSearchContainer";

const Header = () => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const { searchQuery } = useParams();

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

export default Header;
