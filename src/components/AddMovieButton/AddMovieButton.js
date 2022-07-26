import React from "react";
import PropTypes from "prop-types";

import classes from "./AddMovieButton.module.css";

const AddMovieButton = (props) => {
  return (
    <button
      className={classes["button--transparent"]}
      onClick={props.addMovieHandler}
    >
      + add movie
    </button>
  );
};
AddMovieButton.propTypes = {
  addMovieHandler: PropTypes.func,
};

export default AddMovieButton;
