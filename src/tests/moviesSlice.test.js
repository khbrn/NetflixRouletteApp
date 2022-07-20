import {
  initialStateMock,
  movieMock,
  moviesMock,
  searchedMoviesMock,
  movieMockUpdated,
} from "../mock/moviesSliceMock";
import moviesSlice, { moviesActions } from "../store/moviesSlice";

const reducer = moviesSlice.reducer;

describe("moviesSlice ", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialStateMock);
  });

  describe("loadMovies reducer", () => {
    it("should load movies data to the store for the first time", () => {
      expect(
        reducer(
          initialStateMock,
          moviesActions.loadMovies({ movies: moviesMock })
        ).movies
      ).toEqual(moviesMock);
      expect(
        reducer(
          initialStateMock,
          moviesActions.loadMovies({ movies: moviesMock })
        ).moviesNumber
      ).toEqual(moviesMock.length);
    });

    it("should replace the state with the search result", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: {},
        moviesNumber: moviesMock.length,
      };

      expect(
        reducer(
          previousState,
          moviesActions.loadMovies({ movies: searchedMoviesMock })
        ).movies
      ).toEqual(searchedMoviesMock);
      expect(
        reducer(
          previousState,
          moviesActions.loadMovies({ movies: searchedMoviesMock })
        ).moviesNumber
      ).toEqual(searchedMoviesMock.length);
    });
  });

  describe("deleteMovie reducer", () => {
    it("should remove proper movie from the store and update movies number", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: {},
        moviesNumber: moviesMock.length,
      };
      const deletedMovie = movieMock;

      expect(
        reducer(previousState, moviesActions.deleteMovie(deletedMovie)).movies
      ).not.toContainEqual(deletedMovie);
      expect(
        reducer(previousState, moviesActions.deleteMovie(deletedMovie))
          .moviesNumber
      ).toEqual(previousState.moviesNumber - 1);
    });

    it("should not update the store if movie id was not found", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: {},
        moviesNumber: moviesMock.length,
      };
      const movieToDelete = { id: 1234, title: "Test" };

      expect(
        reducer(previousState, moviesActions.deleteMovie(movieToDelete))
      ).toEqual(previousState);
    });
  });

  describe("addMovie reducer", () => {
    it("should update the store with the new movie", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: {},
        moviesNumber: moviesMock.length,
      };
      const newMovie = { id: 10328, title: "Test" };

      expect(
        reducer(previousState, moviesActions.addMovie({ movie: newMovie }))
          .movies
      ).toContainEqual(newMovie);
      expect(
        reducer(previousState, moviesActions.addMovie({ movie: newMovie }))
          .moviesNumber
      ).toEqual(previousState.moviesNumber + 1);
    });
  });

  describe("getMovie reducer", () => {
    it("should update the store with the chosen movie", () => {
      const previousState = {
        movies: searchedMoviesMock,
        currentMovie: {},
        moviesNumber: searchedMoviesMock.length,
      };
      const chosenMovie = movieMock;

      expect(
        reducer(previousState, moviesActions.getMovie({ movie: chosenMovie }))
          .currentMovie
      ).toEqual(chosenMovie);
    });
  });

  describe("editMovie reducer", () => {
    it("should update movies array if the movie was edited", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: {},
        moviesNumber: moviesMock.length,
      };

      expect(
        reducer(
          previousState,
          moviesActions.editMovie({ movie: movieMockUpdated })
        ).movies
      ).toContainEqual(movieMockUpdated);
    });

    it("should update current movie if the current movie was edited", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: movieMock,
        moviesNumber: moviesMock.length,
      };

      expect(
        reducer(
          previousState,
          moviesActions.editMovie({ movie: movieMockUpdated })
        ).currentMovie
      ).toEqual(movieMockUpdated);
    });

    it("should not update current movie if the current movie was not edited", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: { id: 269149, title: "Zootopia" },
        moviesNumber: moviesMock.length,
      };

      expect(
        reducer(
          previousState,
          moviesActions.editMovie({ movie: movieMockUpdated })
        ).currentMovie
      ).toEqual(previousState.currentMovie);
    });

    it("should not update movies if the movie id was not found", () => {
      const previousState = {
        movies: moviesMock,
        currentMovie: movieMock,
        moviesNumber: moviesMock.length,
      };
      const movieToEdit = { id: 2691492346, title: "Test" };

      expect(
        reducer(previousState, moviesActions.editMovie({ movie: movieToEdit }))
          .movies
      ).not.toContain(movieToEdit);
    });
  });
});
