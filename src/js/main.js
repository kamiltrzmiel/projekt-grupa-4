/* --------------------------------- HEADER --------------------------------- */

import { moviesLoading } from './services/loader';
import { reloadHeader, setRegisterAndSignUp } from './services/firebase';
/* --------------------------------- FOOTER --------------------------------- */
/* --------------------------------- MOVIE-MODAL --------------------------------- */

const hideModalBtn = document.getElementById('hide-modal');
const movieModal = document.getElementById('modal-backdrop');

const toggleModal = () => {
  movieModal.classList.toggle('hidden');
};

hideModalBtn.addEventListener('click', toggleModal);

/* ------------------------------ USAGE EXAMPLE ----------------------------- */
import api from './services/api';
import { render } from './services/render';
const renderElement = document.getElementById('posters');
import { infiniteScroll } from './services/infiniteScroll';

const fetchTrendingMovies = async page => {
  try {
    const response = await api.fetchTrendingMovies(page);
    const data = response.data.results;
    render(data, renderElement, false);
    infiniteScroll(fetchTrendingMovies);
  } catch (error) {
    console.log(error);
  }
};

moviesLoading();
setTimeout(() => {
  fetchTrendingMovies(1);
}, 250);

import { searchMovies } from './services/keyword_searcher';
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__icon');

// Do the search movies after clicking the search button
searchButton.addEventListener('click', event => {
  event.preventDefault();
  const querySearch = searchInput.value.trim();
  if (querySearch) {
    moviesLoading();
    renderElement.innerHTML = '';
    searchMovies({ query: querySearch });
  }
});

// Do the search movies after pressing enter key
searchInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const querySearch = searchInput.value.trim();
    if (querySearch) {
      moviesLoading();
      renderElement.innerHTML = '';
      searchMovies({ query: querySearch });
    }
  }
});

reloadHeader();
setRegisterAndSignUp();
