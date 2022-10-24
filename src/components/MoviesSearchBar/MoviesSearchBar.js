import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ENTER_KEY } from "../../constants/constants";
import { fetchMoviesData, searchMoviesData } from "../../store/moviesActions";

import "./MoviesSearchBar.scss";

const MoviesSearchBar = ({ searchQuery }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchQuery);
    if (!searchQuery) {
      dispatch(fetchMoviesData());
      return;
    }
    dispatch(searchMoviesData(searchQuery));
  }, [searchQuery]);

  const searchMoviesOnEnterPress = (event) => {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      navigate(`../search/${query}`);
    }
  };

  const searchMovies = (event) => {
    event.preventDefault();
    navigate(`../search/${query}`);
  };

  return (
    <div className="movies-search-bar">
      <h1 className="search-bar-header">Find your movie</h1>
      <form className="search-form">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={query || ""}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onKeyDown={searchMoviesOnEnterPress}
          className="search-form__input"
        />
        <button
          type="submit"
          className="search-form__button"
          onClick={searchMovies}
        >
          <p>Search</p>
        </button>
      </form>
    </div>
  );
};

MoviesSearchBar.propTypes = {
  searchQuery: PropTypes.string,
};

export default MoviesSearchBar;
