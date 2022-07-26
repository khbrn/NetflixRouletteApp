import { useSelector } from "react-redux";
import React from "react";

import classes from "./MoviesList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <>
      <ul className={classes["movie-list"]}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
