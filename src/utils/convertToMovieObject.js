export const convertToMovieObject = (dialogData) => {
  return {
    title: dialogData.title || "",
    vote_average: dialogData.rating ? Number(dialogData.rating) : 0,
    release_date: dialogData.releaseDate || "",
    poster_path: dialogData.posterPath || "",
    overview: dialogData.overview || "",
    runtime: dialogData.runtime ? Number(dialogData.runtime) : 0,
    genres: dialogData.genres || [],
  };
};
