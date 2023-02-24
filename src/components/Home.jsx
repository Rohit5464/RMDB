import React, { useEffect } from "react";
import MovieListing from "./MovieListing";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getSearchTerm,
} from "../features/Movies/movieSlice";

const Home = () => {
  const searchTermSelector = useSelector(getSearchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchTermSelector));
    dispatch(fetchAsyncShows(searchTermSelector));
  }, [dispatch, searchTermSelector]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
