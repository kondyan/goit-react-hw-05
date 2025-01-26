import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { fetchMovieReviews } from "../../api/api";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieReviews, setMovieCast] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieReviews(movieId);
        console.log(response);
        setMovieCast(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    // if (inputValue === "") {
    //   return;
    // }
    fetchReviews();
  }, []);
  return (
    <>
      <ul>
        {movieReviews.length
          ? movieReviews.map((review) => {
              return (
                <li key={review.id}>
                  <div>
                    <h2>{`Author: ${review.author}`}</h2>
                    <p>{review.content}</p>
                  </div>
                </li>
              );
            })
          : "We don't have any reviews for this movie"}
      </ul>
    </>
  );
};

export default MovieReviews;
