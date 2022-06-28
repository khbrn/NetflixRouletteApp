import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App/App";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
