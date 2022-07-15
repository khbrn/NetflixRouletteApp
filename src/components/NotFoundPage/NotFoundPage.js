import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="error-message">
      <h1>Page Not Found</h1>
      <h2>404</h2>
      <button type="button">
        <Link to="/">BACK TO HOME PAGE</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
