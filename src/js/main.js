/* -------------------------------- VARIABLES ------------------------------- */
import { API_URL, IMG_URL, API_KEY, LANGUAGE } from './variables/constants';
import { Pagination } from 'tui-pagination';
/* --------------------------------- HEADER --------------------------------- */

import keyword_searcher from './keyword_searcher';
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

const fetchTrendingMovies = async page => {
  try {
    const response = await api.fetchTrendingMovies(page);
    const data = response.data.results;
    render(data, renderElement, false);
  } catch (error) {
    console.log(error);
  }
};

moviesLoading();
setTimeout(() => {
  fetchTrendingMovies(1);
}, 250);
