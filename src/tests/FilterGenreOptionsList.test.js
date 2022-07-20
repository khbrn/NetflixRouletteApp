import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FilterGenreOptionsList from "../components/FilterGenreOptionsList/FilterGenreOptionsList";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigator,
}));

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

describe("FilterGenreOptionsList component", () => {
  it("should render the component as list items", () => {
    act(() => {
      render(<FilterGenreOptionsList />, container);
    });

    const genreList = screen.queryAllByRole("listitem");

    expect(genreList).not.toHaveLength(0);
  });

  it("should render all default genres", () => {
    act(() => {
      render(<FilterGenreOptionsList />, container);
    });

    const optionAll = screen.queryByText(/all/i);
    const optionDocumentary = screen.queryByText(/documentary/i);
    const optionComedy = screen.queryByText(/comedy/i);
    const optionHorror = screen.queryByText(/horror/i);
    const optionCrime = screen.queryByText(/crime/i);

    expect(optionAll).toBeInTheDocument();
    expect(optionDocumentary).toBeInTheDocument();
    expect(optionComedy).toBeInTheDocument();
    expect(optionHorror).toBeInTheDocument();
    expect(optionCrime).toBeInTheDocument();
  });

  it("should change URL query when the user clicked on documentary genre list item", async () => {
    act(() => {
      render(<FilterGenreOptionsList />, container);
    });

    await userEvent.click(screen.getByText(/documentary/i));

    expect(mockedNavigator).toHaveBeenCalled();
    expect(mockedNavigator).toHaveBeenCalledWith(
      `../search?genre=documentary`,
      { replace: true }
    );
  });

  it("should change URL query when user clicked on all genre list item", async () => {
    act(() => {
      render(<FilterGenreOptionsList />, container);
    });

    await userEvent.click(screen.getByText(/all/i));

    expect(mockedNavigator).toHaveBeenCalled();
    expect(mockedNavigator).toHaveBeenCalledWith(`../search?genre=`, {
      replace: true,
    });
  });
});
