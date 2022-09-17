export const convertToMovieObject = (dialogData) => {
  if (dialogData.genres && dialogData.genres.includes(",")) {
    dialogData.genres = dialogData.genres.split(",");
  } else if (
    dialogData.dialogType == "Add Movie" &&
    !dialogData.genres.includes(",")
  ) {
    dialogData.genres = [dialogData.genres];
  }

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
