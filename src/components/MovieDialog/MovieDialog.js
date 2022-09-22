import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { addMovieData, editMovieData } from "../../store/moviesActions";
import { ADD_MOVIE, EDIT_MOVIE } from "../../constants/constants";
import { convertToMovieObject } from "../../utils/convertToMovieObject";
import validateUrl from "../../utils/validateUrl";

import "./MovieDialog.scss";

const MovieDialog = (props) => {
  const dispatch = useDispatch();

  const closeDialog = () => {
    props.setMovieDialogVisibility(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.releaseDate) {
      errors.releaseDate = "Date is required";
    }
    if (!values.posterPath) {
      errors.posterPath = "Movie URL is required";
    } else if (!validateUrl(values.posterPath)) {
      errors.posterPath = "Invalid Movie URL";
    }

    if (!values.rating) {
      errors.rating = "Rating is required";
    }

    if (!values.overview) {
      errors.overview = "Overview is required";
    }

    if (!values.runtime) {
      errors.runtime = "Runtime is required";
    }

    if (!values.genres.length) {
      errors.genres = "Genre is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      dialogType: props.movie ? EDIT_MOVIE : ADD_MOVIE,
      title: props.movie ? props.movie.title : "",
      releaseDate: props.movie ? props.movie.release_date : "",
      posterPath: props.movie ? props.movie.poster_path : "",
      rating: props.movie ? props.movie.vote_average : "",
      genres: props.movie ? props.movie.genres : [],
      runtime: props.movie ? props.movie.runtime : "",
      overview: props.movie ? props.movie.overview : "",
    },
    validate,
    onSubmit: (values) => {
      const movieObj = convertToMovieObject(values);

      if (values.dialogType === ADD_MOVIE) {
        dispatch(addMovieData(movieObj));
      } else {
        movieObj.id = props.movie.id;
        dispatch(editMovieData(movieObj));
      }
      closeDialog();
    },
  });

  return (
    <div className="movie-dialog">
      <div className="movie-dialog__container">
        <button className="close-button" onClick={closeDialog}>
          <Icon path={mdiClose} size={"28px"} color="white" />
        </button>
        <h2>{props.movie ? EDIT_MOVIE : ADD_MOVIE}</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="movie-dialog__form">
            <div className="movie-dialog__form__row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="movie-dialog__form__column-left"
                placeholder="Add Title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title && <p>{formik.errors.title}</p>}
            </div>
            <div className="movie-dialog__form__row">
              <label htmlFor="releaseDate">Release date</label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                className="movie-dialog__form__column-right"
                placeholder="Select date"
                onChange={formik.handleChange}
                value={formik.values.releaseDate}
              />
              {formik.errors.releaseDate && <p>{formik.errors.releaseDate}</p>}
            </div>
          </div>
          <div className="movie-dialog__form">
            <div className="movie-dialog__form__row">
              <label htmlFor="posterPath">Movie url</label>
              <input
                type="text"
                id="posterPath"
                name="posterPath"
                className="movie-dialog__form__column-left"
                placeholder="https://"
                onChange={formik.handleChange}
                value={formik.values.posterPath}
              />
              {formik.errors.posterPath && <p>{formik.errors.posterPath}</p>}
            </div>
            <div className="movie-dialog__form__row">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                className="movie-dialog__form__column-right"
                placeholder="7.8"
                onChange={formik.handleChange}
                value={formik.values.rating}
              />
              {formik.errors.rating && <p>{formik.errors.rating}</p>}
            </div>
          </div>
          <div className="movie-dialog__form">
            <div className="movie-dialog__form__row">
              <label htmlFor="genres">Genre</label>
              <input
                type="text"
                id="genres"
                name="genres"
                className="movie-dialog__form__column-right"
                placeholder="Select Genre"
                onChange={formik.handleChange}
                value={formik.values.genres}
              />
              {formik.errors.genres && <p>{formik.errors.genres}</p>}
            </div>
            <div className="movie-dialog__form__row">
              <label htmlFor="runtime">Runtime</label>
              <input
                type="text"
                id="runtime"
                name="runtime"
                className="movie-dialog__form__column-left"
                placeholder="minutes"
                onChange={formik.handleChange}
                value={formik.values.runtime}
              />
              {formik.errors.runtime && <p>{formik.errors.runtime}</p>}
            </div>
          </div>
          <div className="movie-dialog__form">
            <div className="movie-dialog__form__row">
              <label htmlFor="overview">Overview</label>
              <textarea
                type="text"
                id="overview"
                name="overview"
                className="movie-dialog__form__overview"
                placeholder="Movie description"
                onChange={formik.handleChange}
                value={formik.values.overview}
              />
              {formik.errors.overview && <p>{formik.errors.overview}</p>}
            </div>
          </div>
          <div className="movie-dialog__buttons">
            <button
              type="button"
              className="btn--secondary"
              onClick={formik.handleReset}
            >
              Reset
            </button>
            <button type="submit" className="btn--primary">
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
    id: PropTypes.number,
  }),
  setMovieDialogVisibility: PropTypes.func,
};

export default MovieDialog;
