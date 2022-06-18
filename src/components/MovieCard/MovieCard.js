import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import "./MovieCard.css";
import Icon from "@mdi/react";
import { mdiDotsVerticalCircle } from "@mdi/js";

import MovieContextMenu from "../MovieContextMenu/MovieContextMenu";
import DeleteMovieDialog from "../DeleteMovieDialog/DeleteMovieDialog";
import MovieDialog from "../MovieDialog/MovieDialog";
import { AppContext } from "../../hooks/AppContext";

const MovieCard = ({ movie }) => {
  const { navigationContext, movieContext } = useContext(AppContext);

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] =
    useState(false);

  const movieReleaseYear = new Date(movie.release_date).getFullYear();

  const handleMovieDetails = () => {
    movieContext.setMovie(movie);
    navigationContext.setIsHeaderVisible(false);
  };

  return (
    <>
      {isMovieDialogVisible ? (
        <MovieDialog
          setMovieDialogVisibility={setIsMovieDialogVisible}
          movie={movie}
        />
      ) : (
        <></>
      )}
      {isDeleteMovieDialogVisible ? (
        <DeleteMovieDialog
          setDeleteDialogVisibility={setIsDeleteMovieDialogVisible}
          movie={movie}
        />
      ) : (
        <></>
      )}
      <div className="movie-card__container ">
        <div className="movie-card">
          <Icon
            path={mdiDotsVerticalCircle}
            size={"36px"}
            className="menu-icon"
            onClick={() => setIsContextMenuVisible(true)}
          />
          {isContextMenuVisible ? (
            <MovieContextMenu
              setIsContextMenuVisible={setIsContextMenuVisible}
              setDeleteDialogVisibility={setIsDeleteMovieDialogVisible}
              setMovieDialogVisibility={setIsMovieDialogVisible}
            />
          ) : (
            <></>
          )}
          <img
            src={movie.poster_path}
            alt="Movie Poster"
            className="movie-card__image"
            onClick={handleMovieDetails}
          />
        </div>
        <div className="movie-card__information">
          <div className="movie-card__information-title">{movie.title}</div>
          <div className="movie-card__information-year">
            <p>{movieReleaseYear}</p>
          </div>
        </div>
        <p className="movie-card__genre">{movie.genres.join(", ")}</p>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieCard;
