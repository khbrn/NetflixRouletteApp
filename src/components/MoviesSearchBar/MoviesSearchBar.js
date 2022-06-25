import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMoviesData } from "../../store/moviesActions";
import "./MoviesSearchBar.css";

const MoviesSearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      return searchMovieHandler(query);
    }
  };

  const searchMovieHandler = (query) => {
    dispatch(searchMoviesData(query));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    searchMovieHandler(query);
  };

  return (
    <div className="search-movie">
      <h1 className="search-movie__header">Find your movie</h1>
      <form className="search-movie__form">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="search-movie__bar"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onKeyDown={handleKeypress}
        />
        <button
          type="submit"
          className="button__submit"
          onClick={submitHandler}
        >
          <p>Search</p>
        </button>
      </form>
    </div>
  );
};

export default MoviesSearchBar;
