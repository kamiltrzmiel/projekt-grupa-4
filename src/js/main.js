/* -------------------------------- VARIABLES ------------------------------- */
import { API_URL, IMG_URL, API_KEY, LANGUAGE } from './variables/constants';

/* --------------------------------- HEADER --------------------------------- */

import keyword_searcher from './keyword_searcher';
import { moviesLoading } from './services/loader';
import { reloadHeader, setRegisterAndSignUp } from './services/firebase';

/* --------------------------------- FOOTER --------------------------------- */
const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');
const body = document.querySelector('body');

reloadHeader();
setRegisterAndSignUp();

showDialogBtn.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  dialog.showModal();
});

const closeModal = () => {
  body.style.overflow = 'auto';
  dialog.close();
};

hideDialogBtn.addEventListener('click', closeModal);
dialog.addEventListener('close', closeModal);

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
