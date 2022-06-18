import React from "react";
import PropTypes from "prop-types";

import "./Main.css";
import MoviesList from "../MoviesList/MoviesList";
import MoviesSortDropdown from "../MoviesSortDropdown/MoviesSortDropdown";
import FilterGenreOptionsList from "../FilterGenreOptionsList/FilterGenreOptionsList";
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
    <main>
      <div className="main__separator" />
      <div className="main__container">
        <div className="main__container__tools">
          <FilterGenreOptionsList />
          <MoviesSortDropdown />
        </div>
        <div className="progress-bar" />
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
