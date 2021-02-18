import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);

  const movieApp = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ec9d61b50efa906b489ad8301028b687&language=en-US&page=${page}`
    );

    setMovies(data.results);
  };

  useEffect(() => {
    movieApp();
  }, [page]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, page, setPage }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useGobalMovieContext = () => {
  return useContext(MovieContext);
};
