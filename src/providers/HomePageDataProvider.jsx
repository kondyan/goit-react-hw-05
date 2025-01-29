import { createContext } from "react";
import useHomePageData from "../hooks/useHomePageData";

export const MyContext = createContext();

const HomePageDataProvider = ({ children }) => {
  const { trendingMovies, loading, error } = useHomePageData();
  return (
    <MyContext.Provider value={{ trendingMovies, loading, error }}>
      {children}
    </MyContext.Provider>
  );
};

export default HomePageDataProvider;
