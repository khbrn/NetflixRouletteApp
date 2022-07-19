import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import NotFoundPage from "./NotFoundPage";

test("shows the not found page message for incorrect URL address", () => {
  const history = createMemoryHistory();
  history.push("/page-not-found");

  const tree = renderer
    .create(
      <Router location={history.location} navigator={history}>
        <NotFoundPage />
      </Router>
    )
    .toJSON();

  render(
    <Router location={history.location} navigator={history}>
      <NotFoundPage />
    </Router>
  );

  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/back to home page/i)).toBeInTheDocument();

  expect(tree).toMatchSnapshot();
});
