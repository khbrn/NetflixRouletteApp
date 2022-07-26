import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import MovieContextMenu from "../MovieContextMenu/MovieContextMenu";
import DeleteMovieDialog from "../DeleteMovieDialog/DeleteMovieDialog";
import MovieDialog from "../MovieDialog/MovieDialog";

import classes from "./MovieCard.module.css";
import Icon from "@mdi/react";
import { mdiDotsVerticalCircle } from "@mdi/js";

const MovieCard = ({ movie }) => {
  const router = useRouter();

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
  const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] =
    useState(false);

  const movieReleaseYear = new Date(movie.release_date).getFullYear();

  const handleMovieDetails = () => {
    router.push(`../search?movie=${movie.id || ""}`);
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
      <div className={classes["movie-card__container"]}>
        <div className={classes["movie-card"]}>
          <Icon
            path={mdiDotsVerticalCircle}
            size={"36px"}
            className={classes["menu-icon"]}
            onClick={handleContextMenu}
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
            className={classes["movie-card__image"]}
            onClick={handleMovieDetails}
          />
        </div>
        <div className={classes["movie-card__information"]}>
          <div className={classes["movie-card__information-title"]}>
            {movie.title}
          </div>
          <div className={classes["movie-card__information-year"]}>
            <p>{movieReleaseYear}</p>
          </div>
        </div>
        <p className={classes["movie-card__genre"]}>
          {movie.genres.join(", ")}
        </p>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieCard;
