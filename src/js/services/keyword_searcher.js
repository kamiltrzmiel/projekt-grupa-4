import { fetchMoviesWithQuery } from './api';
import { render } from './render';
import { infiniteScroll } from './infiniteScroll';

const endOfResults = document.getElementById('end-of-results');

const renderElement = document.getElementById('posters');

export const searchMovies = async ({ query, page = 1 }) => {
  if (query === '') {
    return;
  }
  try {
    renderElement.innerHTML = '';
    const response = await fetchMoviesWithQuery(query, page);
    const movies = response.data.results;
    render(movies, renderElement, false);
    infiniteScroll(fetchMoviesWithQuery, query);
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};
