import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import "./FilterGenreResult.css";

const FilterGenreResult = () => {
  const moviesNumber = useSelector((state) => state.movies.moviesNumber);
  return (
    <p className="filter-genre-result">
      <span>{moviesNumber}</span> movies found
    </p>
  );
};

FilterGenreResult.propTypes = {
  movieCounter: PropTypes.number.isRequired,
};

FilterGenreResult.defaultProps = {
  movieCounter: 0,
};

export default FilterGenreResult;
