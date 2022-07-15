import React from "react";
import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import { useCustomRouting } from "../../hooks/useCustomRouting";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PageLayout from "../PageLayout/PageLayout";

import "./App.css";

const App = () => {
  const [searchParams] = useSearchParams();
  useCustomRouting(searchParams);

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Navigate to="search" />} />
        <Route path="search" element={<PageLayout />}>
          <Route path=":searchQuery" element={<PageLayout />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
