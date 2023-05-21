/* -------------------------------- VARIABLES ------------------------------- */
import './variables/constants';

/* --------------------------------- HEADER --------------------------------- */

/* --------------------------------- FOOTER --------------------------------- */
const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');

showDialogBtn.addEventListener('click', () => dialog.showModal());
hideDialogBtn.addEventListener('click', () => dialog.close());


/* ------------------------------ USAGE EXAMPLE ----------------------------- */
import api from './services/api';

const fetchTrendingMovies = async (page) => {
  try {
    const response = await api.fetchTrendingMovies(page);
    console.log(response.data.results);
  } catch (error) {
    console.log(apiError);
  }
};

fetchTrendingMovies(2);
