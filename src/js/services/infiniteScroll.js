import api from './api';
import { render } from './render';
import searchIcon from '../../assets/header/search-icon.svg';
import logoIcon from '../../assets/film.svg';
//import libraryHTML from '../../library.html';
import { debounce } from 'lodash';
const renderElement = document.getElementById('posters');
const headerEl = document.querySelector('.container__header');
const searchFormEl = document.getElementById('search-form');
const logoIconEl = document.querySelector('.logo__icon');
const logoNameEl = document.querySelector('.logo');

let currentPage = 1;

const loadMoreMovies = async (instruction, query = '') => {
  currentPage++;
  try {
    let response = {};
    if (instruction === 'fetchTrendingMovies')
      response = await api.fetchTrendingMovies(currentPage);
    if (instruction === 'searchMovies')
      response = await searchMovies({ query: query, page: currentPage });
    const data = response.data.results;
    render(data, renderElement, false, true);
  } catch (error) {
    console.log(error);
  }
};

const observeScrollToEnd = (instruction, query = '') => {
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
    loadMoreMovies(instruction, query);
  }
};

const scrollEvent = (instruction, query = '') =>
  debounce(() => {
    observeScrollToEnd(instruction, query);
  }, 300);

const observeScrollLibrary = () => {
  const buttonsEl = document.querySelector('.header--library__buttons');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    buttonsEl.style.opacity = '0';
    logoNameEl.style.opacity = '0';
    headerEl.classList.add('container__header--scrolled');
    logoIconEl.style.transform = 'rotate(90deg)';
  }

  if (scrollPosition === 0) {
    headerEl.classList.remove('container__header--scrolled');
    buttonsEl.style.opacity = '100';
    logoNameEl.style.opacity = '100';
    logoIconEl.style.transform = 'rotate(0deg)';
  }
};

export const infiniteScrollLibrary = () => {
  document.addEventListener('scroll', debounce(observeScrollLibrary, 300));
  logoIconEl.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = './library.html';
  });
};

import { searchMovies } from './keyword_searcher';
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__icon');
import { moviesLoading } from './loader';

const showSearchResults = async (instruction, querySearch) => {
  const scrollListener = scrollEvent(instruction);
  document.addEventListener('scroll', scrollListener);
  if (querySearch) {
    const response = await searchMovies({ query: querySearch });
    if (response) {
      moviesLoading();
      renderElement.innerHTML = '';
      currentPage = 1;
      const data = response.data.results;
      render(data, renderElement, false, false);
      document.addEventListener(
        'scroll',
        debounce(() => {
          observeScrollToEnd('searchMovies', querySearch);
        }, 300),
      );
      document.removeEventListener('scroll', scrollListener);
    }
  }
};
export const searchListeners = instruction => {
  searchButton.addEventListener('click', async event => {
    event.preventDefault();
    const querySearch = searchInput.value.trim();
    showSearchResults(instruction, querySearch);
  });

  // Do the search movies after pressing enter key
  searchInput.addEventListener('keypress', async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const querySearch = searchInput.value.trim();
      showSearchResults(instruction, querySearch);
    }
  });
};
