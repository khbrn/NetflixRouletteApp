import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__header">Page Not Found</h1>
      <h2 className="not-found-page__header">404</h2>
      <button type="button">
        <Link to="/">BACK TO HOME PAGE</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
