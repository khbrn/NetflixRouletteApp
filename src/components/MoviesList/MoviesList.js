import React from "react";
import { useContext } from "react";

import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from "../../hooks/AppContext";

const MoviesList = () => {
  const { moviesContext } = useContext(AppContext);
  return (
    <>
      <ul className="movie-list">
        {moviesContext.movies.map((movie, index) => (
          <li key={index}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
