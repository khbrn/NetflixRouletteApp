import React from "react";
import { MemoryRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import { screen, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import pretty from "pretty";
import "@testing-library/jest-dom";

import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("NotFoundPage component", () => {
  it("shows the not found page message for incorrect URL address", () => {
    const history = createMemoryHistory();
    history.push("/page-not-found");

    act(() => {
      render(
        <MemoryRouter location={history.location} navigator={history}>
          <NotFoundPage />
        </MemoryRouter>,
        container
      );
    });

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/back to home page/i)).toBeInTheDocument();
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });
});
