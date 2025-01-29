import { useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../api/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLink = useRef(location.state);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    // if (inputValue === "") {
    //   return;
    // }
    fetchDetails();
  }, []);
  return (
    <>
      <button className={css.goBackBtn}>
        <IoIosArrowRoundBack color="black" />
        <NavLink
          className={css.goBackBtnLink}
          to={backLink.current ? backLink.current : "/movies"}
        >
          Go back
        </NavLink>
      </button>

      <div className={css.movieCard}>
        <div>
          <img
            className={css.poster}
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`
                : "no poster found"
            }
            alt={`Movie Poster of ${movieDetails.original_title}`}
          />
        </div>
        <div className={css.mainInfoWrapper}>
          <div>
            <h2>{movieDetails.original_title}</h2>
            <p>{`Popularity: ${movieDetails.popularity}`}</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            <p>
              {movieDetails.genres
                ? movieDetails.genres.map((genre) => genre.name + " ")
                : "no genres found"}
            </p>
          </div>
        </div>
      </div>
      <div className={css.addInfo}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link className={css.addInfoLink} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.addInfoLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
