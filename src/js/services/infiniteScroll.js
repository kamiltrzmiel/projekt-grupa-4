import api from './api';
import { render } from './render';
import searchIcon from '../../assets/header/search-icon.svg';
import logoIcon from '../../assets/film.svg';
const renderElement = document.getElementById('posters');
const headerEl = document.querySelector('.container__header');
const searchFormEl = document.getElementById('search-form');
const logoIconEl = document.querySelector('.logo__icon');

export const infiniteScroll = (func, query = '') => {
  let currentPage = 1;

  const loadMoreMovies = async () => {
    currentPage++;
    try {
      let response = {};
      if (func.name === 'fetchTrendingMovies')
        response = await api.fetchTrendingMovies(currentPage);
      const data = response.data.results;
      render(data, renderElement, false, (pagination = true));
    } catch (error) {
      console.log(error);
    }
  };

  const observeScrollToEnd = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      headerEl.classList.add('container__header--scrolled');
      searchFormEl.classList.add('hidden');
      logoIconEl.src = searchIcon;
    }

    if (scrollPosition === 0) {
      headerEl.classList.remove('container__header--scrolled');
      searchFormEl.classList.remove('hidden');
      logoIconEl.src = logoIcon;
    }

    if (scrollPosition + windowHeight >= documentHeight) {
      loadMoreMovies(func);
    }
  };
  document.addEventListener('scroll', observeScrollToEnd);
};
