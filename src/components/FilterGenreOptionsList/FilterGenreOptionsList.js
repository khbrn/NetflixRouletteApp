import React from "react";
import { useNavigate } from "react-router-dom";
import { movieFilterOptions } from "../../utils/filterOptions";

import "./FilterGenreOptionsList.css";

const FilterGenreOptionsList = () => {
  const navigate = useNavigate();
  return (
    <ul className="filter-genre">
      {movieFilterOptions.map((filterOption) => (
        <li
          key={filterOption.id}
          onClick={() => {
            navigate(
              `../search?genre=${filterOption.filterOptionValue || ""}`,
              { replace: true }
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
