import api from './api';
import { render } from './render';
const renderElement = document.getElementById('posters');

const fetchTrendingMovies = async page => {
  try {
    const response = await api.fetchTrendingMovies(page);
    const data = response.data.results;
    console.log(data);
    render(data, renderElement, true);
  } catch (error) {
    console.log(error);
  }
};

fetchTrendingMovies(1);

renderElement.addEventListener('click', e => {
  const detaileDialogEl = document.getElementById('detaile-dialog');
  const detaile = e.target;
  detaileDialogEl.showModal();
});
