import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "../MovieCard/MovieCard";

import "./MoviesList.scss";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <>
      <ul className="movies-list">
        {movies.map((movie) => (
          <li className="movies-list__item" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
