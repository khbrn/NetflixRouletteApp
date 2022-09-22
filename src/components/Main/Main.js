import React from "react";
import PropTypes from "prop-types";

import "./Main.scss";
import MoviesList from "../MoviesList/MoviesList";
import MoviesSortDropdown from "../MoviesSortDropdown/MoviesSortDropdown";
import GenresList from "../GenresList/GenresList";
import FilterGenreResult from "../FilterGenreResult/FilterGenreResult";

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
      <div className="main__separator" />
      <div className="main__container">
        <div className="main__container__tools">
          <GenresList />
          <MoviesSortDropdown />
        </div>
        <div className="main__container__progress-bar" />
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
