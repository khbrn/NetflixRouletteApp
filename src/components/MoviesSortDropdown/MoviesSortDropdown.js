import React from "react";
import { useRouter } from "next/router";

import { sortingOptions } from "../../utils/sortingOptions";

import classes from "./MoviesSortDropdown.module.css";

const MoviesSortDropdown = () => {
  const router = useRouter();
  const sortParam = router.query.sortBy;

  const filterHander = (event) => {
    const field = event.target.value;
    router.push(`../search?sortBy=${field || ""}`);
  };

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
