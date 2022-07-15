import React from "react";
import { NavLink } from "react-router-dom";

import "./FilterGenreOptionsList.css";

const FilterGenreOptionsList = () => {
  return (
    <nav className="filter-genre">
      <NavLink to={`?genre=${""}`}>all</NavLink>
      <NavLink to={`?genre=${"documentary" || ""}`}>documentary</NavLink>
      <NavLink to={`?genre=${"comedy" || ""}`}>comedy</NavLink>
      <NavLink to={`?genre=${"horror" || ""}`}>horror</NavLink>
      <NavLink to={`?genre=${"crime" || ""}`}>crime</NavLink>
    </nav>
  );
};

export default FilterGenreOptionsList;
