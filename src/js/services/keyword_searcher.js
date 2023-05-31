import { fetchMoviesWithQuery } from './api';

const searchErrorMessageEl = document.querySelector('.search__not-found');

export const searchMovies = async ({ query, page = 1 }) => {
  if (query === '') {
    return;
  }
  try {
    const response = await fetchMoviesWithQuery(query, page);
    const movies = response.data.results;
    if (movies.length === 0) {
      searchErrorMessageEl.style.visibility = 'visible';
    } else {
      searchErrorMessageEl.style.visibility = 'hidden';
    }
    return response;
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};
