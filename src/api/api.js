import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.headers = {
  Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_KEY}`,
};

const params = {};

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get("3/trending/movie/day?language=en-US");
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await axios.get(`3/movie/${id}`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCast(id) {
  try {
    const response = await axios.get(`3/movie/${id}/credits`);

    return response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(`3/movie/${id}/reviews`);

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesByQuery(q) {
  params.query = q;
  try {
    const response = await axios.get(`3/search/movie`, {
      params,
    });

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}
