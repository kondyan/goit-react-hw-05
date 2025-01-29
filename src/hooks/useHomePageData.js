import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/api";

const useHomePageData = () => {
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
  return { trendingMovies, loading, error };
};

export default useHomePageData;
