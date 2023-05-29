import Pagination from 'tui-pagination';
const TUI_VISIBLE_PAGES = 5;
const ITEMS_PER_PAGE = 20;

export function createPagination(totalItems, page, func, query) {
  const options = {
    itemsPerPage: ITEMS_PER_PAGE,
    totalItems: totalItems,
    page: page,
    visiblePages: TUI_VISIBLE_PAGES,
  };

  const container = document.getElementById('pagination');
  const pagination = new Pagination(container, options);

  pagination.on('afterMove', function (eventData) {
    const currentPage = eventData.page;
    if (func.name === 'fetchTrendingMovies') {
      // Perform actions based on the current page
      console.log(`Current page: ${currentPage}`);
      func(currentPage);
    }
    if (func.name === 'searchMovies') {
      func({ query: query, page: currentPage });
    }
  });
}
