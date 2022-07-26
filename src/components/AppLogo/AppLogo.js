import React from "react";
import classes from "./AppLogo.module.css";

const AppLogo = () => {
  return (
    <div className={classes.logo} aria-hidden="true">
      <span className={classes["logo--bolded"]}>netflix</span>roulette
    </div>
  );
};

export default AppLogo;
