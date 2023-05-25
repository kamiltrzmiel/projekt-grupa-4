import axios from 'axios';
import { API_KEY } from '../variables/constants';

export const fetchTrendingMovies = async pageNumber => {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: API_KEY,
      page: pageNumber,
    },
  });
  return response;
};

export const fetchMoviesWithQuery = async searchQuery => {
  const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  return response;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};

export const fetchTrailerById = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};

const api = {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieById,
  fetchTrailerById,
};

export default api;
