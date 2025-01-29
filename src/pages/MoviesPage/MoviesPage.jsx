import { NavLink, useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { fetchMoviesByQuery } from "../../api/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const queryText = searchParams.get("q") || "";
  useEffect(() => {
    const fetchMovies = async (query) => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMoviesByQuery(query);

        setSearchedMovies(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (queryText === "") {
      return;
    }
    fetchMovies(queryText);
  }, [queryText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      // notify();
      console.log("search query is empty");
      return;
    }

    const updatedParams = new URLSearchParams(searchParams);

    updatedParams.set("q", inputValue);
    setSearchParams(updatedParams);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.inputField}
          type="text"
          name="input"
          value={inputValue}
          onChange={handleChange}
        />
        <button className={css.searchBtn}>Search</button>
      </form>
      <MovieList movies={searchedMovies} />
    </>
  );
};

export default MoviesPage;
