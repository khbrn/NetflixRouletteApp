import React from "react";
import { Link } from "react-router-dom";

import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={classes["error-message"]}>
      <h1>Page Not Found</h1>
      <h2>404</h2>
      <button type="button">
        <Link to="/">BACK TO HOME PAGE</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
