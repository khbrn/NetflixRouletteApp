import React from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import MoviesSearchContainer from "../MoviesSearchContainer/MoviesSearchContainer";
import "./PageLayout.css";

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
          <MoviesSearchContainer searchQuery={searchQuery} />
        )}
      </header>
      <Main isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default PageLayout;
