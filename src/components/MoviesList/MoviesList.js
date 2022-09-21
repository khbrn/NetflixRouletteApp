import { useSelector } from "react-redux";
import React from "react";

import "./MoviesList.scss";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <>
      <ul className="movie-list">
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
