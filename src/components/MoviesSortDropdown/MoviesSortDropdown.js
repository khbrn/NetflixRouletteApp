import React from "react";
import { useDispatch } from "react-redux";
import { sortMoviesData } from "../../store/moviesActions";
import { sortingOptions } from "../../utils/sortingOptions";
import "./MoviesSortDropdown.css";

const MoviesSortDropdown = () => {
  const dispatch = useDispatch();
  const filterHander = (event) => {
    const field = event.target.value;
    dispatch(sortMoviesData(field));
  };

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
