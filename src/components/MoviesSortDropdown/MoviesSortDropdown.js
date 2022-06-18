import React from "react";
import mockSortOptions from "../../mockData/mockSortOptions";
import "./MoviesSortDropdown.css";

const MoviesSortDropdown = () => {
  return (
    <div className="sort-movie">
      <label htmlFor="sort-movie" className="sort-movie__label">
        Sort by:
      </label>
      <select
        name="sort-movie"
        id="sort-movie"
        className="sort-movie__dropdown"
      >
        {mockSortOptions.map((sortOption, index) => (
          <option value={sortOption} key={index}>
            {sortOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoviesSortDropdown;
