import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ROUTER_PARAMS } from "../../constants/constants";
import { sortingOptions } from "../../utils/sortingOptions";

import "./MoviesSortDropdown.scss";

const MoviesSortDropdown = () => {
  const navigate = useNavigate();

  const filterHander = (event) => {
    const field = event.target.value;
    navigate(`../search?sortBy=${field || ""}`, { replace: true });
  };

  const [searchParams] = useSearchParams();
  const sortParam = searchParams.get(ROUTER_PARAMS.SORT_BY);

  return (
    <div className="movies-sort-dropdown">
      <label htmlFor="sort-movie" className="movies-sort-dropdown__label">
        Sort by:
      </label>
      <select
        name="sort-movie"
        id="sort-movie"
        className="movies-sort-dropdown__list"
        onChange={filterHander}
        value={sortParam || ""}
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
