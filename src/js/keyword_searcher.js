import api from './services/api'; // added function imports from API
import { render } from './services/render';
import { moviesLoading } from './services/loader';
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__icon');
const searchNotFound = document.querySelector('.search__not-found');
// function do load movies by key-word
const searchMovies = async query => {
  const renderElement = document.getElementById('posters');
  try {
    const response = await api.fetchMoviesWithQuery(query);
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
// Do the search movies after clicking the search button
searchButton.addEventListener('click', event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    moviesLoading();
    setTimeout(() => {
      searchMovies(query);
    }, 400);
  }
});
// Do the search movies after pressing enter key
searchInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      moviesLoading();
      setTimeout(() => {
        searchMovies(query);
      }, 400);
    }
  }
});
