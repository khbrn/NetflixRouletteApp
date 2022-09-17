import React from "react";
import { MemoryRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import { screen, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import pretty from "pretty";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

describe("NotFoundPage component", () => {
  it("shows the not found page message for incorrect URL address", () => {
    const history = createMemoryHistory();
    history.push("/movie-not-found");

    const tree = renderer
      .create(
        <MemoryRouter location={history.location} navigator={history}>
          <NotFoundPage />
        </MemoryRouter>
      )
      .toJSON();

    render(
      <MemoryRouter location={history.location} navigator={history}>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/back to home page/i)).toBeInTheDocument();

    expect(tree).toMatchSnapshot();
  });
});
