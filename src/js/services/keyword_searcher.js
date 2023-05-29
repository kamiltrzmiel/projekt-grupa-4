import { fetchMoviesWithQuery } from './api';
import { render } from './render';
const searchNotFound = document.querySelector('.search__not-found');
import { createPagination } from './pagination';
const searchInput = document.querySelector('.search__input');

// function do load movies by key-word
export const searchMovies = async ({ query, page = 1 }) => {
  const renderElement = document.getElementById('posters');
  try {
    const response = await fetchMoviesWithQuery(query, page);
    const totalResults = response.data.total_results;
    const currentPage = response.data.page;
    console.log(response);
    createPagination(totalResults, currentPage, searchMovies, query);
    const data = response.data.results;
    if (data.length === 0) throw new Error();
    searchNotFound.style.visibility = 'hidden';
    render(data, renderElement, false);
    searchInput.value = '';
  } catch (error) {
    console.error('Error searching movies:', error);
    searchNotFound.style.visibility = 'visible';
  }
};
