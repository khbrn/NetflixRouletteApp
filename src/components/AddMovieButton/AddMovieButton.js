import React from "react";
import PropTypes from "prop-types";

import "./AddMovieButton.css";

const AddMovieButton = (props) => {
  return (
    <button className="button--transparent" onClick={props.addMovieHandler}>
      + add movie
    </button>
  );
};
AddMovieButton.propTypes = {
  addMovieHandler: PropTypes.func,
};

export default AddMovieButton;
