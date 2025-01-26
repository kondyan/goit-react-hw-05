import { useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
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
      <button>
        <Link to={backLink.current ? backLink.current : "/movies"}>
          Go back
        </Link>
      </button>

      <div>
        <div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`
                : "no poster found"
            }
            alt={`Movie Poster of ${movieDetails.original_title}`}
          />
        </div>
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
              ? movieDetails.genres.map((genre) => genre.name)
              : "NO GENRES FOUND"}
          </p>
        </div>
      </div>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
