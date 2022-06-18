import { useState, useEffect } from "react";
import mockMovieData from "../mockData/mockMovieData";

/*
For now it works with mock data (without actual http request)
*/
export const useDummyHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moviesNumber, setMoviesNumber] = useState(0);

  const getMovieData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockMovieData);
      }, 0);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getMovieData()
      .then((fetchedData) => {
        setMovies(fetchedData);
        setMoviesNumber(fetchedData.length);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return [isLoading, movies, setMovies, moviesNumber, setMoviesNumber];
};
