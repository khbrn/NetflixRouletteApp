import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>
        Page Not Found <span>404</span>
      </h1>
      <button type="button">
        <Link to="/">BACK TO HOME PAGE</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
