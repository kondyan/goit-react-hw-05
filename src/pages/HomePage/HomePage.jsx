import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/api";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchTrendingMovies();

        setTrendingMovies(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    // if (inputValue === "") {
    //   return;
    // }
    fetchTrendings();
  }, []);
  return (
    <>
      <p>Homepage</p>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default HomePage;
