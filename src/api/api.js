import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.headers = {
  Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_KEY}`,
};

const params = {};

export async function fetchTrendingMovies() {
  try {
    // params.query = query;
    // params.page = page;
    const response = await axios.get("3/trending/movie/day?language=en-US", {
      params,
    });
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieDetails(id) {
  try {
    // params.query = query;
    // params.page = page;
    const response = await axios.get(`3/movie/${id}`, {
      params,
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCast(id) {
  try {
    // params.query = query;
    // params.page = page;
    const response = await axios.get(`3/movie/${id}/credits`, {
      params,
    });

    return response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviews(id) {
  try {
    // params.query = query;
    // params.page = page;
    const response = await axios.get(`3/movie/${id}/reviews`, {
      params,
    });

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}
