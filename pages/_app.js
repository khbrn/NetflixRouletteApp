import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../src/store/store";

import Footer from "../src/components/Footer/Footer";
import Main from "../src/components/Main/Main";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Main isLoading={false} />
      <Footer />
    </Provider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
