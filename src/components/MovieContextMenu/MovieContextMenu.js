import React from "react";
import PropTypes from "prop-types";

import "./MovieContextMenu.scss";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

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
    <div className="context-menu">
      <button onClick={() => props.setIsContextMenuVisible(false)}>
        <Icon path={mdiClose} size={"18px"} color="white" />
      </button>
      <ul className="context-menu__list">
        <li onClick={editMovie}>Edit</li>
        <li onClick={deleteMovie}>Delete</li>
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
