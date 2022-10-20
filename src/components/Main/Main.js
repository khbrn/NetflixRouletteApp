import React from "react";
import PropTypes from "prop-types";

import MoviesList from "../MoviesList/MoviesList";
import MoviesSortDropdown from "../MoviesSortDropdown/MoviesSortDropdown";
import GenresList from "../GenresList/GenresList";
import FilterGenreResult from "../FilterGenreResult/FilterGenreResult";

import "./Main.scss";

const Main = ({ isLoading }) => {
  let fetchedMovieContent = (
    <div className="loading-message__container ">
      <h2 className="loading-message">Loading...</h2>
    </div>
  );

  return isLoading ? (
    fetchedMovieContent
  ) : (
    <main className="main">
      <div className="separator" />
      <div className="main-container">
        <div className="main-container__tools">
          <GenresList />
          <MoviesSortDropdown />
        </div>
        <div className="main-container__separator" />
        <FilterGenreResult />
        <MoviesList />
      </div>
    </main>
  );
};

Main.propTypes = {
  isLoading: PropTypes.bool,
};

export default Main;
