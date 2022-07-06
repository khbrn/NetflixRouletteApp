import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import { useFetchMoviesData } from "../../hooks/useFetchMoviesData";

const App = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  useFetchMoviesData();

  return (
    <ErrorBoundary>
      <Header />
      <Main isLoading={isLoading} />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
