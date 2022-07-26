import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { convertToMovieObject } from "../../utils/convertToMovieObject";
import { addMovieData, editMovieData } from "../../store/moviesActions";

import classes from "./MovieDialog.module.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

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
    } else if (
      !/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        values.posterPath
      )
    ) {
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
      dialogType: props.movie ? "Edit Movie" : "Add Movie",
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

      if (values.dialogType === "Add Movie") {
        dispatch(addMovieData(movieObj));
      } else {
        movieObj.id = props.movie.id;
        dispatch(editMovieData(movieObj));
      }
      closeDialog();
    },
  });

  return (
    <div className={classes["movie-dialog__container"]}>
      <div className={classes["movie-dialog"]}>
        <button className={classes["close-button"]} onClick={closeDialog}>
          <Icon path={mdiClose} size={"28px"} color="white" />
        </button>
        <h2>{props.movie ? "Edit Movie" : "Add Movie"}</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes["movie-dialog__form-row"]}>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={classes["movie-dialog__form-elems-left"]}
                placeholder="Add Title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title && <p>{formik.errors.title}</p>}
            </div>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="releaseDate">Release date</label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                className={classes["movie-dialog__form-elems-right"]}
                placeholder="Select date"
                onChange={formik.handleChange}
                value={formik.values.releaseDate}
              />
              {formik.errors.releaseDate && <p>{formik.errors.releaseDate}</p>}
            </div>
          </div>
          <div className={classes["movie-dialog__form-row"]}>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="posterPath">Movie url</label>
              <input
                type="text"
                id="posterPath"
                name="posterPath"
                className={classes["movie-dialog__form-elems-left"]}
                placeholder="https://"
                onChange={formik.handleChange}
                value={formik.values.posterPath}
              />
              {formik.errors.posterPath && <p>{formik.errors.posterPath}</p>}
            </div>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                className={classes["movie-dialog__form-elems-right"]}
                placeholder="7.8"
                onChange={formik.handleChange}
                value={formik.values.rating}
              />
              {formik.errors.rating && <p>{formik.errors.rating}</p>}
            </div>
          </div>
          <div className={classes["movie-dialog__form-row"]}>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="genres">Genre</label>
              <input
                type="text"
                id="genres"
                name="genres"
                className={classes["movie-dialog__form-elems-right"]}
                placeholder="Select Genre"
                onChange={formik.handleChange}
                value={formik.values.genres}
              />
              {formik.errors.genres && <p>{formik.errors.genres}</p>}
            </div>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="runtime">Runtime</label>
              <input
                type="text"
                id="runtime"
                name="runtime"
                className={classes["movie-dialog__form-elems-left"]}
                placeholder="minutes"
                onChange={formik.handleChange}
                value={formik.values.runtime}
              />
              {formik.errors.runtime && <p>{formik.errors.runtime}</p>}
            </div>
          </div>
          <div className={classes["movie-dialog__form-row"]}>
            <div className={classes["movie-dialog__form__container"]}>
              <label htmlFor="overview">Overview</label>
              <textarea
                type="text"
                id="overview"
                name="overview"
                className={classes["movie-dialog__form-elem"]}
                placeholder="Movie description"
                onChange={formik.handleChange}
                value={formik.values.overview}
              />
              {formik.errors.overview && <p>{formik.errors.overview}</p>}
            </div>
          </div>
          <div className={classes["movie-dialog__buttons"]}>
            <button
              type="button"
              className={classes["button__reset"]}
              onClick={formik.handleReset}
            >
              Reset
            </button>
            <button type="submit" className={classes["button__confirm"]}>
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
