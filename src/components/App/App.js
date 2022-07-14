import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";

const App = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Navigate to="search" />}></Route>
        <Route path="search" element={<Header />} />
        <Route path="search/:searchQuery" element={<Header />} />
      </Routes>
      <Main isLoading={isLoading} />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
