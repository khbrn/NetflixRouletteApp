import React from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PageLayout from "../PageLayout/PageLayout";

const App = () => {
  return (
    <ErrorBoundary>
      <PageLayout />
    </ErrorBoundary>
  );
};

export default App;
