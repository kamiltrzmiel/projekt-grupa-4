import { fetchMoviesWithQuery } from './api';
import { render } from './render';
import { infiniteScroll } from './infiniteScroll';

const endOfResults = document.getElementById('end-of-results');

const renderElement = document.getElementById('posters');
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
    render(movies, renderElement, false, (pagination = true));
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};
