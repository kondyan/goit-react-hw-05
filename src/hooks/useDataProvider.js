import { useContext } from "react";
import { MyContext } from "../providers/homePageDataProvider";

const useDataProvider = () => {
  const { trendingMovies, loading, error } = useContext(MyContext);
  return { trendingMovies, loading, error };
};

export default useDataProvider;
