import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesData, sortMoviesData } from "../store/moviesActions";
import { uiActions } from "../store/uiSlice";

export const useFetchMoviesData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiActions.startLoading());
    dispatch(fetchMoviesData());
    dispatch(sortMoviesData("release_date"));
    dispatch(uiActions.stopLoading());
  }, []);
};
