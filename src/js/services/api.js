import axios from 'axios';
import { API_KEY } from '../variables/constants';
const itemsPerPage = 24; // results per page

export const fetchTrendingMovies = async pageNumber => {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: API_KEY,
      page: pageNumber,
      itemsPerPage: itemsPerPage,
    },
  });
  return response;
};

export const fetchMoviesWithQuery = async (searchQuery, page) => {
  console.log('Search Query:', searchQuery);
  console.log('Page:', page);

  const start = (page - 1) * itemsPerPage;
  const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      page: page,
      itemsPerPage: itemsPerPage,
      start: start,
    },
  });
  console.log('API Response:', response);
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
