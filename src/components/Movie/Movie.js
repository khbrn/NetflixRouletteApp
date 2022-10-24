import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

import AppLogo from "../AppLogo/AppLogo";
import { uiActions } from "../../store/uiSlice";
import timeToHoursConverter from "../../utils/timeToHoursConverter";

import "./Movie.scss";

const Movie = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.currentMovie);
  const releaseYear = new Date(movie.release_date).getFullYear();

  const handleSearchMovie = () => {
    dispatch(uiActions.showHeader());
  };

  return (
    <div className="movie">
      <div className="movie-header">
        <AppLogo />
        <Icon
          path={mdiMagnify}
          size={"28px"}
          color="#F65261"
          rotate={90}
          onClick={handleSearchMovie}
        />
      </div>
      <div className="movie-content">
        <img className="movie-image" src={movie.poster_path} alt="poster" />
        <div className="movie-details">
          <div className="movie-details__row">
            <div className="movie-details__title">{movie.title}</div>
            <div className="movie-details__rate">
              <p>{movie.vote_average}</p>
            </div>
          </div>
          <div className="movie-details__genre">{movie.genres?.join(", ")}</div>
          <div className="movie-details__row">
            <div className="movie-details__release-year">
              {releaseYear || ""}
            </div>
            <div className="movie-details__duration">
              {movie.runtime ? timeToHoursConverter(movie.runtime) : 0}
            </div>
          </div>
          <div className="movie-details__overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
