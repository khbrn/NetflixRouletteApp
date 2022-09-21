import React from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header";

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
