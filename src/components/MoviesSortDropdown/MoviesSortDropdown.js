import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ROUTER_PARAMS } from "../../constants/constants";
import { sortingOptions } from "../../utils/sortingOptions";

import classes from "./MoviesSortDropdown.module.css";

const MoviesSortDropdown = () => {
  const navigate = useNavigate();

  const filterHander = (event) => {
    const field = event.target.value;
    navigate(`../search?sortBy=${field || ""}`, { replace: true });
  };

  const [searchParams] = useSearchParams();
  const sortParam = searchParams.get(ROUTER_PARAMS.SORT_BY);

  return (
    <div className={classes["sort-movie"]}>
      <label htmlFor="sort-movie" className={classes["sort-movie__label"]}>
        Sort by:
      </label>
      <select
        name="sort-movie"
        id="sort-movie"
        className={classes["sort-movie__dropdown"]}
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
