import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useDispatch } from "react-redux";

import { deleteMovieData } from "../../store/moviesActions";
import { uiActions } from "../../store/uiSlice";

import "../MovieDialog/MovieDialog.scss";

const DeleteMovieDialog = (props) => {
  const dispatch = useDispatch();
  const closeDialog = () => {
    props.setDeleteDialogVisibility(false);
  };

  const deleteMovieHandler = () => {
    dispatch(deleteMovieData(props.movie.id));
    dispatch(uiActions.showHeader());
    closeDialog();
  };

  return (
    <div className="movie-dialog">
      <div className="modal-small">
        <div className="modal-header">
          <button className="modal-header__button" onClick={closeDialog}>
            <Icon path={mdiClose} size={"28px"} color="white" />
          </button>
          <h2 className="modal-header__title">Delete movie</h2>
        </div>
        <div className="modal-content">
          <p>Are you sure you want to delete this movie?</p>
        </div>
        <div className="modal-footer">
          <button
            onClick={deleteMovieHandler}
            className="modal-footer__button-primary"
          >
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
