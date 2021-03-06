import React from "react";
import PropTypes from "prop-types";

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import "./DeleteMovieDialog.css";

const DeleteMovieDialog = (props) => {
  const closeDialog = () => {
    props.setDeleteDialogVisibility(false);
  };

  const deleteMovieHandler = () => {
    console.log(`Movie ID ${props.movie.id} was deleted`);
  };

  return (
    <div className="delete-movie__container">
      <div className="delete-movie">
        <button className="close-button" onClick={closeDialog}>
          <Icon path={mdiClose} size={"28px"} color="white" />
        </button>
        <h2>Delete movie</h2>
        <p>Are you sure you want to delete this movie?</p>
        <div className="delete-movie__button">
          <button className="button__confirm" onClick={deleteMovieHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteMovieDialog.propTypes = {
  setDeleteDialogVisibility: PropTypes.func,
  movie: PropTypes.object,
};

export default DeleteMovieDialog;
