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
        `${fetchURL}?search=${query}&searchBy=title&limit=50`
      );
      const { data } = await response.json();
      return data;
    } catch (error) {
      return { error: error.response };
    }
  },
};
