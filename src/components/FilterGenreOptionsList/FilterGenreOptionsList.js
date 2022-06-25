import React from "react";
import { useDispatch } from "react-redux";
import { filterMoviesData } from "../../store/moviesActions";
import { genres } from "../../utils/filterOptions";
import "./FilterGenreOptionsList.css";

const FilterGenreOptionsList = () => {
  const dispatch = useDispatch();
  return (
    <ul className="filter-genre">
      {genres.map((genre, index) => (
        <li
          key={index}
          onClick={() => dispatch(filterMoviesData(genre.filterOptionValue))}
        >
          {genre.filterOptionName}
        </li>
      ))}
    </ul>
  );
};

export default FilterGenreOptionsList;
