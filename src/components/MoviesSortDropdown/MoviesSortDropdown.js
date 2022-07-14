import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { sortMoviesData } from "../../store/moviesActions";
import { sortingOptions } from "../../utils/sortingOptions";

import "./MoviesSortDropdown.css";

const MoviesSortDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterHander = (event) => {
    const field = event.target.value;
    navigate(`search?sortBy=${field || ""}`);
    dispatch(sortMoviesData(field));
  };

  const [searchParams] = useSearchParams();
  const sortParam = searchParams.get("sortBy");

  useEffect(() => {
    dispatch(sortMoviesData(sortParam));
  }, [sortParam]);

  return (
    <div className="sort-movie">
      <label htmlFor="sort-movie" className="sort-movie__label">
        Sort by:
      </label>
      <select
        name="sort-movie"
        id="sort-movie"
        className="sort-movie__dropdown"
        onChange={filterHander}
        value={sortParam}
      >
        {sortingOptions.map((sortingOption, index) => (
          <option value={sortingOption.sortingOptionValue} key={index}>
            {sortingOption.sortingOptionDisplay}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoviesSortDropdown;
