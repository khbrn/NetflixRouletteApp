import React from "react";
import { useRouter } from "next/router";

import { movieFilterOptions } from "../../utils/filterOptions";

import classes from "./FilterGenreOptionsList.module.css";

const FilterGenreOptionsList = () => {
  const router = useRouter();

  return (
    <ul className={classes["filter-genre"]}>
      {movieFilterOptions.map((filterOption) => (
        <li
          key={filterOption.id}
          onClick={() => {
            router.push(
              `../search?genre=${filterOption.filterOptionValue || ""}`
            );
          }}
        >
          {filterOption.filterOptionName}
        </li>
      ))}
    </ul>
  );
};

export default FilterGenreOptionsList;
