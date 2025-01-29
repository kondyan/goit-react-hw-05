import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const backPath = `${location.pathname}${location.search}`;
  return (
    <ul className={css.gallery}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <NavLink
            className={css.movie}
            to={`/movies/${movie.id}`}
            state={backPath}
          >
            {movie.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
