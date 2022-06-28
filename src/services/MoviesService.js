const fetchURL = "http://localhost:4000/movies";

export const MoviesService = {
  loadMovies: async () => {
    try {
      const response = await fetch(fetchURL);
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
  searchMovies: async (query) => {
    try {
      const response = await fetch(
        `${fetchURL}?search=${query}&searchBy=title&limit=21`
      );
      const { data } = await response.json();
      return data;
    } catch (error) {
      return { error: error.response };
    }
  },
  sortMovies: async (field) => {
    try {
      const response = await fetch(
        `${fetchURL}?sortBy=${field}&sortOrder=desc&limit=21`
      );
      const { data } = await response.json();
      return data;
    } catch (error) {
      return { error: error.response };
    }
  },
  filterMovies: async (genre) => {
    try {
      const response = await fetch(`${fetchURL}?filter=${genre}&limit=21`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      return { error: error.response };
    }
  },
  deleteMovie: async (id) => {
    try {
      const response = await fetch(`${fetchURL}/${id}`, {
        method: "DELETE",
      });

      const { data } = await response.json();
      return data;
    } catch (error) {
      return { error: error.response };
    }
  },
};
