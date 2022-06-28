import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import "./MovieCard.css";
import Icon from "@mdi/react";
import { mdiDotsVerticalCircle } from "@mdi/js";

import MovieContextMenu from "../MovieContextMenu/MovieContextMenu";
import DeleteMovieDialog from "../DeleteMovieDialog/DeleteMovieDialog";
import MovieDialog from "../MovieDialog/MovieDialog";
import { uiActions } from "../../store/uiSlice";
import { moviesActions } from "../../store/moviesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] =
    useState(false);

  const movieReleaseYear = new Date(movie.release_date).getFullYear();

  const handleMovieDetails = () => {
    dispatch(moviesActions.setCurrentMovie({ movie: movie }));
    dispatch(uiActions.hideHeader());
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
