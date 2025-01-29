import { useContext } from "react";
import { MyContext } from "../providers/HomePageDataProvider";

const useDataProvider = () => {
  const { trendingMovies, loading, error } = useContext(MyContext);
  return { trendingMovies, loading, error };
};

export default useDataProvider;
