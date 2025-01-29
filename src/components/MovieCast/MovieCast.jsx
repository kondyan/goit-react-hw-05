import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../api/api";
import { MdOutlineNoPhotography } from "react-icons/md";

const MovieCast = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieCast(movieId);
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
    fetchCast();
  }, []);
  return (
    <>
      <ul className={css.cardList}>
        {movieCast
          ? movieCast.map((castM) => {
              return (
                <li key={castM.id}>
                  <div className={css.card}>
                    <div>
                      <img
                        className={css.image}
                        src={
                          castM.profile_path
                            ? `https://image.tmdb.org/t/p/w185${castM.profile_path}`
                            : "no picture found"
                        }
                        alt="no picture found"
                      />
                    </div>
                    <div>{`Name: ${castM.name}`}</div>
                    <div>{`Character: ${castM.character}`}</div>
                  </div>
                </li>
              );
            })
          : "We don't have cast list for this movie"}
      </ul>
    </>
  );
};

export default MovieCast;
