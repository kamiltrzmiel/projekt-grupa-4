import axios from 'axios';
import api, { fetchTrendingMovies } from './services/api'; // added function imports from API
import { API_KEY, IMG_URL } from './variables/constants'; // added constants

const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.search__input');
const searchNotFound = document.querySelector('.search__not-found');
const postersContainer = document.querySelector('.posters');
const paginationContainer = document.querySelector('.pagination__container');

let currentPage = 1;
let totalPages = 1;
let currentQuery = 1;

// function do load movies by key-word
const searchMovies = async (query, page) => {
  try {
    const response = await api.fetchMoviesWithQuery(query, page);
    const { results, total_pages } = response.data;

    // clear the container with posters
    postersContainer.innerHTML = '';

    // calc results max rows amount
    const maxRows = 8;

    // calc max amount showing results due to screen wide
    let maxResultsPerRow;
    if (window.innerWidth <= 480) {
      maxResultsPerRow = 1;
    } else if (window.innerWidth <= 768) {
      maxResultsPerRow = 2;
    } else {
      maxResultsPerRow = 3;
    }

    // count max showing result
    const maxResults = maxRows * maxResultsPerRow;

    // Render movies poster
    results.slice(0, maxResults).forEach((movie, index) => {
      if (index % maxResultsPerRow === 0) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('poster');
        movieElement.innerHTML = `
          <img class="poster__image" src="${IMG_URL}${movie.poster_path}" alt="${movie.title}" />
          <h3 class="poster__title">${movie.title}</h3>
        `;
        postersContainer.appendChild(movieElement);
      }
    });

    searchNotFound.style.display = 'none';
  } catch (error) {
    console.error('Error searching movies:', error);
    searchNotFound.style.display = 'block';
  }
};

// Do the search movies after asking in form
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  currentQuery = query;

  if (query) {
    searchMovies(query, 1);
  }
});

// Load trending movies after load web-site
fetchTrendingMovies('', 1);
