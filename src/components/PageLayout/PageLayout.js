import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import MovieDetails from "../MovieDetails/MovieDetails";

const PageLayout = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const { searchQuery } = useParams();

  return (
    <>
      <header>
        {!isHeaderVisible ? (
          <MovieDetails />
        ) : (
          <Header searchQuery={searchQuery} />
        )}
      </header>
      <Main isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default PageLayout;
