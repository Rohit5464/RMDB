import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/movieSlice";

export const Store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
