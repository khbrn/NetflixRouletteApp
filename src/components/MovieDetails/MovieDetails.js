import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

import AppLogo from "../AppLogo/AppLogo";
import { uiActions } from "../../store/uiSlice";
import timeToHoursConverter from "../../utils/timeToHoursConverter";

import "./MovieDetails.scss";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.currentMovie);
  const releaseYear = new Date(movie.release_date).getFullYear();

  const handleSearchMovie = () => {
    dispatch(uiActions.showHeader());
  };

  return (
    <div className="movie-details">
      <div className="details-header">
        <AppLogo />
        <Icon
          path={mdiMagnify}
          size={"28px"}
          color="#F65261"
          rotate={90}
          onClick={handleSearchMovie}
        />
      </div>
      <div className="details__content">
        <img
          className="details-content__image"
          src={movie.poster_path}
          alt="poster"
        />
        <div className="details">
          <div className="details__row">
            <div className="details__title">{movie.title}</div>
            <div className="details__rate">
              <p>{movie.vote_average}</p>
            </div>
          </div>
          <div className="details__genre">{movie.genres?.join(", ")}</div>
          <div className="details__row">
            <div className="details__release-year">{releaseYear || ""}</div>
            <div className="details__duration">
              {movie.runtime ? timeToHoursConverter(movie.runtime) : 0}
            </div>
          </div>
          <div className="details__overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
