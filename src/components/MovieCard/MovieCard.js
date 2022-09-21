import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import MovieContextMenu from "../MovieContextMenu/MovieContextMenu";
import DeleteMovieDialog from "../DeleteMovieDialog/DeleteMovieDialog";
import MovieDialog from "../MovieDialog/MovieDialog";

import "./MovieCard.scss";
import Icon from "@mdi/react";
import { mdiDotsVerticalCircle } from "@mdi/js";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] =
    useState(false);

  const movieReleaseYear = new Date(movie.release_date).getFullYear();

  const handleMovieDetails = () => {
    navigate(`../search?movie=${movie.id || ""}`, { replace: true });
  };

  const handleContextMenu = () => {
    setIsContextMenuVisible(true);
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
            onClick={handleContextMenu}
          />
          {isContextMenuVisible && (
            <MovieContextMenu
              setIsContextMenuVisible={setIsContextMenuVisible}
              setDeleteDialogVisibility={setIsDeleteMovieDialogVisible}
              setMovieDialogVisibility={setIsMovieDialogVisible}
            />
          )}
          <img
            src={movie.poster_path}
            alt="Movie Poster"
            onClick={handleMovieDetails}
          />
        </div>
        <div className="movie-card__information">
          <div className="movie-card__information__title">{movie.title}</div>
          <div className="movie-card__information__year">
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
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieCard;
