import React, { useState } from "react";

import AppLogo from "../AppLogo/AppLogo";
import AddMovie from "../AddMovieButton/AddMovieButton";
import MovieSearchBar from "../MoviesSearchBar/MoviesSearchBar";
import MovieDialog from "../MovieDialog/MovieDialog";

import "./Header.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const addMovie = () => {
    setIsMovieDialogVisible(true);
  };
  return (
    <header>
      {!isHeaderVisible ? (
        <MovieDetails />
      ) : (
        <>
          <div className="header__background" />
          <div className="header__elements">
            <div className="header__first-elements">
              <AppLogo />
              <AddMovie addMovieHandler={addMovie} />
              {isMovieDialogVisible ? (
                <MovieDialog
                  setMovieDialogVisibility={setIsMovieDialogVisible}
                />
              ) : (
                <></>
              )}
            </div>
            <MovieSearchBar />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
