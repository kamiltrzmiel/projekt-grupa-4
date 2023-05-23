/* -------------------------------- VARIABLES ------------------------------- */
import { API_URL, IMG_URL, API_KEY, LANGUAGE } from './variables/constants';

/* --------------------------------- HEADER --------------------------------- */

import pagination from './pagination';

/* --------------------------------- FOOTER --------------------------------- */
const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');
const body = document.querySelector('body');

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
    render(data, renderElement, true);
  } catch (error) {
    console.log(error);
  }
};

fetchTrendingMovies(1);
