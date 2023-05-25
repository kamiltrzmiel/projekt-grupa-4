import Pagination from 'tui-pagination';
import '../../../node_modules/tui-pagination/dist/tui-pagination';
import constants from '../variables/constants';
import { fetchMoviesWithQuery, fetchTrendingMovies } from './api';
const TUI_VISIBLE_PAGES = 5;

export function createPagination(totalItems, visiblePages) {
  const options = totalItems => {
    itemsPerPage: 20;
    totalItems: totalItems;
    visiblePages: 5, TUI_VISIBLE_PAGES;
  };

  const container = document.getElementById('pagination');
  const pagination = new Pagination(container, options(totalItems));

  //   if (visiblePages > 1) {
  //     refs.pagination.style.display = 'block';
  //   } else {
  //     refs.pagination.style.display = 'none';
  //   }
  // Tworzenie paginacji

  return pagination;
}
const totalItems = 100; // Przykładowa wartość - należy ją dostosować do swoich potrzeb
const visiblePages = 5; // Przykładowa wartość - należy ją dostosować do swoich potrzeb

createPagination(totalItems, visiblePages);
