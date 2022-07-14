import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";

import { filterMoviesData } from "../../store/moviesActions";

import "./FilterGenreOptionsList.css";

const FilterGenreOptionsList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const genreParam = searchParams.get("genre");

  useEffect(() => {
    dispatch(filterMoviesData(genreParam));
  }, [genreParam]);

  return (
    <nav className="filter-genre">
      <NavLink to={`search?genre=${""}`}>All</NavLink>
      <NavLink to={`search?genre=${"documentary" || ""}`}>documentary</NavLink>
      <NavLink to={`search?genre=${"comedy" || ""}`}>comedy</NavLink>
      <NavLink to={`search?genre=${"horror" || ""}`}>horror</NavLink>
      <NavLink to={`search?genre=${"crime" || ""}`}>crime</NavLink>
    </nav>
  );
};

export default FilterGenreOptionsList;
