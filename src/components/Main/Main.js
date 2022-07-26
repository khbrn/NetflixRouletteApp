import React from "react";
import PropTypes from "prop-types";

import MoviesList from "../MoviesList/MoviesList";
import MoviesSortDropdown from "../MoviesSortDropdown/MoviesSortDropdown";
import FilterGenreOptionsList from "../FilterGenreOptionsList/FilterGenreOptionsList";
import FilterGenreResult from "../FilterGenreResult/FilterGenreResult";

import classes from "./Main.module.css";

const Main = ({ isLoading }) => {
  let fetchedMovieContent = (
    <div className={classes["loading-message__container"]}>
      <h2 className={classes["loading-message"]}>Loading...</h2>
    </div>
  );

  return isLoading ? (
    fetchedMovieContent
  ) : (
    <main className={classes.main}>
      <div className={classes["main__separator"]} />
      <div className={classes["main__container"]}>
        <div className={classes["main__container__tools"]}>
          <FilterGenreOptionsList />
          <MoviesSortDropdown />
        </div>
        <div className={classes["progress-bar"]} />
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
