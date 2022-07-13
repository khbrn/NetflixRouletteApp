import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ENTER_KEY } from "../../constants/constants";
import { searchMoviesData } from "../../store/moviesActions";
import "./MoviesSearchBar.css";

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const MoviesSearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("search");
  const params = { search: query };

  useEffect(() => {
    setQuery(searchQuery);
    dispatch(searchMoviesData(searchQuery));
  }, [searchQuery]);

  const searchMoviesOnEnterPress = (event) => {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(params)}`,
      });
      dispatch(searchMoviesData(query));
    }
  };

  const searchMovies = (event) => {
    event.preventDefault();
    navigate({ pathname: "/search", search: `?${createSearchParams(params)}` });
    dispatch(searchMoviesData(query));
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
          onKeyDown={searchMoviesOnEnterPress}
        />
        <button type="submit" className="button__submit" onClick={searchMovies}>
          <p>Search</p>
        </button>
      </form>
    </div>
  );
};

export default MoviesSearchBar;
