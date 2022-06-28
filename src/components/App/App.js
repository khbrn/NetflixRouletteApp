import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MovieDetails from "../MovieDetails/MovieDetails";

import { useFetchMoviesData } from "../../hooks/useFetchMoviesData";

const App = () => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const isLoading = useSelector((state) => state.ui.isLoading);

  useFetchMoviesData();

  return (
    <ErrorBoundary>
      {isHeaderVisible ? (
        <Header />
      ) : (
        <header>
          <MovieDetails />
        </header>
      )}
      <Main isLoading={isLoading} />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
