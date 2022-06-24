import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MovieDetails from "../MovieDetails/MovieDetails";

import { AppContext } from "../../hooks/AppContext";
import { useFetchMoviesData } from "../../hooks/useFetchMoviesData";

const App = () => {
  const isHeaderVisible = useSelector((state) => state.ui.isHeaderVisible);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const [movie, setMovie] = useState({});

  useFetchMoviesData();

  const appContext = {
    movieContext: {
      movie,
      setMovie,
    },
  };

  return (
    <ErrorBoundary>
      <AppContext.Provider value={appContext}>
        {isHeaderVisible ? (
          <Header />
        ) : (
          <header>
            <MovieDetails />
          </header>
        )}
        <Main isLoading={isLoading} />
        <Footer />
      </AppContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
