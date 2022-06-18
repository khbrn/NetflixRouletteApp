import React, { useState } from "react";
import PropTypes from "prop-types";

import "./MovieDialog.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const MovieDialog = (props) => {
  const dialogInfo = {
    dialogType: props.movie ? "Edit Movie" : "Add Movie",
    title: props.movie ? props.movie.title : "",
    releaseDate: props.movie ? props.movie.release_date : "",
    posterPath: props.movie ? props.movie.poster_path : "",
    rating: props.movie ? props.movie.vote_average : "",
    genres: props.movie ? props.movie.genres : "",
    runtime: props.movie ? props.movie.runtime : "",
    overview: props.movie ? props.movie.overview : "",
  };
  const [dialogData, setDialogData] = useState(dialogInfo);

  const dataChangeHandler = (event) => {
    const name = event.target.name;
    setDialogData((prevState) => {
      return { ...prevState, [name]: event.target.value };
    });
  };
  const closeDialog = () => {
    props.setMovieDialogVisibility(false);
  };

  const reset = () => {
    setDialogData(dialogInfo);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(dialogData);
  };

  return (
    <div className="movie-dialog__container">
      <div className="movie-dialog">
        <button className="close-button" onClick={closeDialog}>
          <Icon path={mdiClose} size={"28px"} color="white" />
        </button>
        <h2>{dialogData.dialogType}</h2>
        <form onSubmit={submitHandler}>
          <div className="movie-dialog__form-row">
            <div className="movie-dialog__form__container">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="movie-dialog__form-elems-left"
                placeholder="Add Title"
                onChange={dataChangeHandler}
                value={dialogData.title}
              />
            </div>
            <div className="movie-dialog__form__container">
              <label htmlFor="releaseDate">Release date</label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                className="movie-dialog__form-elems-right"
                placeholder="Select date"
                onChange={dataChangeHandler}
                value={dialogData.releaseDate}
              />
            </div>
          </div>
          <div className="movie-dialog__form-row">
            <div className="movie-dialog__form__container">
              <label htmlFor="posterPath">Movie url</label>
              <input
                type="text"
                id="posterPath"
                name="posterPath"
                className="movie-dialog__form-elems-left"
                placeholder="https://"
                onChange={dataChangeHandler}
                value={dialogData.posterPath}
              />
            </div>
            <div className="movie-dialog__form__container">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                className="movie-dialog__form-elems-right"
                placeholder="7.8"
                onChange={dataChangeHandler}
                value={dialogData.rating}
              />
            </div>
          </div>
          <div className="movie-dialog__form-row">
            <div className="movie-dialog__form__container">
              <label htmlFor="genres">Genre</label>
              <input
                type="text"
                id="genres"
                name="genres"
                className="movie-dialog__form-elems-right"
                placeholder="Select Genre"
                onChange={dataChangeHandler}
                value={dialogData.genres}
              />
            </div>
            <div className="movie-dialog__form__container">
              <label htmlFor="runtime">Runtime</label>
              <input
                type="text"
                id="runtime"
                name="runtime"
                className="movie-dialog__form-elems-left"
                placeholder="minutes"
                onChange={dataChangeHandler}
                value={dialogData.runtime}
              />
            </div>
          </div>
          <div className="movie-dialog__form-row">
            <div className="movie-dialog__form__container">
              <label htmlFor="overview">Overview</label>
              <textarea
                type="text"
                id="overview"
                name="overview"
                className="movie-dialog__form-elem"
                placeholder="Movie description"
                onChange={dataChangeHandler}
                value={dialogData.overview}
              />
            </div>
          </div>
          <div className="movie-dialog__buttons">
            <button className="button__reset" onClick={reset}>
              Reset
            </button>
            <button type="submit" className="button__confirm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

MovieDialog.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  setMovieDialogVisibility: PropTypes.func,
};

export default MovieDialog;
