import React, { useState } from "react";
import PropTypes from "prop-types";

import AddMovieButton from "../AddMovieButton/AddMovieButton";
import AppLogo from "../AppLogo/AppLogo";
import MovieDialog from "../MovieDialog/MovieDialog";
import MoviesSearchBar from "../MoviesSearchBar/MoviesSearchBar";

const MoviesSearchContainer = ({ searchQuery }) => {
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const addMovie = () => {
    setIsMovieDialogVisible(true);
  };

  return (
    <div className="movies-search-container">
      <div className="header__background" />
      <div className="header__elements">
        <div className="header__first-elements">
          <AppLogo />
          <AddMovieButton addMovieHandler={addMovie} />
          {isMovieDialogVisible && (
            <MovieDialog setMovieDialogVisibility={setIsMovieDialogVisible} />
          )}
        </div>
        <MoviesSearchBar searchQuery={searchQuery} />
      </div>
    </div>
  );
};

MoviesSearchContainer.propTypes = {
  searchQuery: PropTypes.string,
};

export default MoviesSearchContainer;
