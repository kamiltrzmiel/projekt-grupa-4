import { fetchMoviesWithQuery } from './api';
import { render } from './render';

let currentPage = 1;
const perPage = 20;
let currentQuery = '';

const endOfResults = document.getElementById('end-of-results');
let totalResults = 0;
let fetching = false;

const renderElement = document.getElementById('posters');

const updateUI = (movies, totalResults) => {
  render(movies, renderElement, true);

  if (renderElement.children.length >= totalResults) {
    const message = document.createElement('p');
    message.textContent = "We're sorry, but you've reached the end of search results.";
    endOfResults.appendChild(message);
  }
};

export const searchMovies = async ({ query, page = 1 }) => {
  if (query === '') {
    return;
  }
  if (query !== currentQuery) {
    currentPage = 1;
    currentQuery = query;
    renderElement.innerHTML = '';
  }
  try {
    const response = await fetchMoviesWithQuery(query, page);
    const movies = response.data.results;
    const totalResults = response.data.total_results;
    updateUI(movies, totalResults);
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};
