import React from "react";
import PropTypes from "prop-types";

import "./AddMovieButton.scss";

const AddMovieButton = (props) => {
  return (
    <button className="btn--secondary" onClick={props.addMovieHandler}>
      + add movie
    </button>
  );
};
AddMovieButton.propTypes = {
  addMovieHandler: PropTypes.func,
};

export default AddMovieButton;
