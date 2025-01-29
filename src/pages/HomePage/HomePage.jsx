import { useContext, useState } from "react";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import useDataProvider from "../../hooks/useDataProvider";

const HomePage = () => {
  const { trendingMovies, loading, error } = useDataProvider();
  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default HomePage;
