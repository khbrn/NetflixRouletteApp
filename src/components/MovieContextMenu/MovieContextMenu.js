import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import "./MovieContextMenu.scss";

const MovieContextMenu = (props) => {
  const deleteMovie = () => {
    props.setIsContextMenuVisible(false);
    props.setDeleteDialogVisibility(true);
  };

  const editMovie = () => {
    props.setIsContextMenuVisible(false);
    props.setMovieDialogVisibility(true);
  };
  return (
    <div className="movie-context-menu">
      <div className="context-menu-header">
        <button
          onClick={() => props.setIsContextMenuVisible(false)}
          className="context-menu-header__button"
        >
          <Icon path={mdiClose} size={"18px"} color="white" />
        </button>
      </div>
      <ul className="context-menu-content">
        <li onClick={editMovie} className="context-menu-content__item">
          Edit
        </li>
        <li onClick={deleteMovie} className="context-menu-content__item">
          Delete
        </li>
      </ul>
    </div>
  );
};

MovieContextMenu.propTypes = {
  setIsContextMenuVisible: PropTypes.func,
  setDeleteDialogVisibility: PropTypes.func,
  setMovieDialogVisibility: PropTypes.func,
};

export default MovieContextMenu;
