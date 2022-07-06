import React from "react";
import { useDispatch } from "react-redux";
import { filterMoviesData } from "../../store/moviesActions";
import { movieFilterOptions } from "../../utils/filterOptions";
import "./FilterGenreOptionsList.css";

const FilterGenreOptionsList = () => {
  const dispatch = useDispatch();
  return (
    <ul className="filter-genre">
      {movieFilterOptions.map((filterOption) => (
        <li
          key={filterOption.id}
          onClick={() =>
            dispatch(filterMoviesData(filterOption.filterOptionValue))
          }
        >
          {filterOption.filterOptionName}
        </li>
      ))}
    </ul>
  );
};

export default FilterGenreOptionsList;
