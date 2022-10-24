import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";

const PageLayout = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const { searchQuery } = useParams();

  return (
    <>
      <header>
        {!isHeaderVisible ? (
          <Movie />
        ) : (
          <MoviesSearch searchQuery={searchQuery} />
        )}
      </header>
      <Main isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default PageLayout;
