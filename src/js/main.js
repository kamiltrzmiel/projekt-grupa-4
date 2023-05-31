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
import { searchListeners } from './services/infiniteScroll';

const fetchTrendingMovies = async page => {
  try {
    const response = await api.fetchTrendingMovies(page);
    const data = response.data.results;
    render(data, renderElement, false);
    searchListeners('fetchTrendingMovies');
  } catch (error) {
    console.log(error);
  }
};

moviesLoading();
setTimeout(() => {
  fetchTrendingMovies(1);
}, 250);

reloadHeader();
setRegisterAndSignUp();
