import AppLogo from "../AppLogo/AppLogo";
import AddMovie from "../AddMovieButton/AddMovieButton";
import MovieSearchBar from "../MoviesSearchBar/MoviesSearchBar";
import MovieDialog from "../MovieDialog/MovieDialog";

import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const addMovie = () => {
    setIsMovieDialogVisible(true);
  };
  return (
    <header>
      <div className="header__background" />
      <div className="header__elements">
        <div className="header__first-elements">
          <AppLogo />
          <AddMovie addMovieHandler={addMovie} />
          {isMovieDialogVisible ? (
            <MovieDialog setMovieDialogVisibility={setIsMovieDialogVisible} />
          ) : (
            <></>
          )}
        </div>
        <MovieSearchBar />
      </div>
    </header>
  );
};

export default Header;
