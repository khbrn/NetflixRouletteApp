import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Page Not Found</h1>
      <h2>404</h2>
      <button type="button">
        <Link to="/">BACK TO HOME PAGE</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
