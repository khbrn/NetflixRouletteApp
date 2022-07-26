import React from "react";

import AppLogo from "../AppLogo/AppLogo";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <AppLogo />
    </footer>
  );
};

export default Footer;
