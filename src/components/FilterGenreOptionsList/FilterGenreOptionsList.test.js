import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import FilterGenreOptionsList from "./FilterGenreOptionsList";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigator,
}));

describe("FilterGenreOptionsList component", () => {
  test("should render the component as list items", () => {
    render(<FilterGenreOptionsList />);

    const genreList = screen.queryAllByRole("listitem");

    expect(genreList).not.toHaveLength(0);
  });

  test("should render all default genres", () => {
    render(<FilterGenreOptionsList />);

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

  test("should change URL query when the user clicked on documentary genre list item", async () => {
    render(<FilterGenreOptionsList />);

    await userEvent.click(screen.getByText(/documentary/i));

    expect(mockedNavigator).toHaveBeenCalled();
    expect(mockedNavigator).toHaveBeenCalledWith(
      `../search?genre=documentary`,
      { replace: true }
    );
  });

  test("should change URL query when user clicked on all genre list item", async () => {
    render(<FilterGenreOptionsList />);

    await userEvent.click(screen.getByText(/all/i));

    expect(mockedNavigator).toHaveBeenCalled();
    expect(mockedNavigator).toHaveBeenCalledWith(`../search?genre=`, {
      replace: true,
    });
  });
});
