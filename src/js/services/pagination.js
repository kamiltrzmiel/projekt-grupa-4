import api from './api';
import { fetchMoviesWithQuery } from './api';
import { render } from './render';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

function fetchMoviesWithQuery(query, page, perPage) {
  return api.fetchMovies(query, page, perPage);
}
// function renderMovies(movies, renderElement, renderVotes) {
//   render(movies, renderElement, renderVotes);
// }

function renderMovies(movies, renderElement) {
  const newMovies = movies.map(
    ({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
      poster_path
        ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
        : (poster_path = placeholder);
      return `
      <figure
        class="posters__box"
        tabindex="0"
        role="button"
        aria-label="${title}"
        data-id="${id}"
      >
        <img src="${poster_path}" alt="${title}" class="posters__img" />
        <figcaption>
          <h3 id="poster-title" class="posters__title">${title}</h3>
          <p class="posters__details">
            ${genre_ids.map(genre => ` ${translateIdToGenre(genre)}`)}
            |
            ${new Date(release_date).getFullYear()}
            ${renderVotes ? `<span class="posters__ranking">${vote_average.toFixed(1)}</span>` : ''}
          </p>
        </figcaption>
      </figure>
    `;
    },
  );

  renderElement.insertAdjacentHTML('beforeend', newMovies.join(''));
}

// creating pagination
export function createPagination(totalItems, visiblePages, searchQuery) {
  const itemsPerPage = 24;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const calculatedVisiblePages = Math.min(totalPages, visiblePages);

  const options = {
    itemsPerPage: itemsPerPage,
    totalItems: totalItems,
    visiblePages: calculatedVisiblePages,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',

    pagination: 'tui-pagination',
    button: 'tui-page-btn',
    buttonActive: 'tui-is-selected',
    buttonFirst: 'tui-ico-first',
    buttonLast: 'tui-ico-last',
    buttonNext: 'tui-ico-next',
    buttonPrev: 'tui-ico-prev',
  };

  const container = document.getElementById('tui-pagination-container');
  const pagination = new Pagination(container, options);
  const renderElement = document.getElementById('posters');

  // "afterMove" after changing page
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    console.log('Current Page:', currentPage);
    fetchMoviesWithQuery(searchQuery, currentPage, itemsPerPage)
      .then(response => {
        const movies = response.data.results;
        // view update after receiving datas
        renderMovies(movies, renderElement, false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  });

  return pagination;
}

// example using paginate
const totalItems = 100; // Przykładowa liczba wszystkich elementów
const visiblePages = 5; // Przykładowa liczba widocznych stron
const searchInput = document.querySelector('.search__input');
const searchQuery = searchInput.value.trim();

createPagination(totalItems, visiblePages, searchQuery);
