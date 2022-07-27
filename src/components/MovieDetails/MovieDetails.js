import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import AppLogo from "../AppLogo/AppLogo";
import { uiActions } from "../../store/uiSlice";

import classes from "./MovieDetails.module.css";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const movie = useSelector((state) => state.movies.currentMovie);
  const releaseYear = new Date(movie.release_date).getFullYear();

  const timeConversion = (timeInMinutes) => {
    let hours = Math.floor(timeInMinutes / 60);
    let minutes = timeInMinutes % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h ${minutes}min`;
  };

  const handleSearchMovie = () => {
    dispatch(uiActions.showHeader());
    router.push(`../search`);
  };

  return (
    <div className={classes["movie-details"]}>
      <div className={classes["movie-details__nav"]}>
        <AppLogo />
        <Icon
          path={mdiMagnify}
          size={"28px"}
          color="#F65261"
          rotate={90}
          onClick={handleSearchMovie}
        />
      </div>
      <div className={classes["movie-details__main"]}>
        <img src={movie.poster_path} alt="poster" />
        <div className={classes["movie-details__data"]}>
          <div className={classes["movie-details__data__first-row"]}>
            <div className={classes["movie-details__data-title"]}>
              {movie.title}
            </div>
            <div className={classes["movie-details__data-rate"]}>
              <p>{movie.vote_average}</p>
            </div>
          </div>
          <div className={classes["movie-details__data-genre"]}>
            {movie.genres?.join(", ")}
          </div>
          <div className={classes["movie-details__data__second-row"]}>
            <div className={classes["movie-details__data-release-year"]}>
              {releaseYear}
            </div>
            <div className={classes["movie-details__data-duration"]}>
              {movie.runtime ? timeConversion(movie.runtime) : 0}
            </div>
          </div>
          <div className={classes["movie-details__data-overview"]}>
            {movie.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
