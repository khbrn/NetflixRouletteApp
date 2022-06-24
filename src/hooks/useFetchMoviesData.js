import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesData } from "../store/moviesActions";
import { uiActions } from "../store/uiSlice";

export const useFetchMoviesData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiActions.startLoading());
    dispatch(fetchMoviesData());
    dispatch(uiActions.stopLoading());
  }, [dispatch]);
};
