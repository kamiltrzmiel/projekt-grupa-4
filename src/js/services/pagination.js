const ITEMS_PER_PAGE = 20;

export function createPagination(totalItems, page, func, query) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const container = document.getElementById('pagination');
  container.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => {
      if (func === fetchTrendingMovies) {
        fetchTrendingMovies(i);
      } else if (func === searchMovies) {
        searchMovies({ query: query, page: i });
      }
      W;
    });
    container.appendChild(pageButton);
  }
}
export function getNextPage(func, query) {
  const currentPage = parseInt(document.querySelector('.pagination-active').textContent);
  const nextPage = currentPage + 1;

  if (func === fetchTrendingMovies) {
    fetchTrendingMovies(nextPage);
  } else if (func === searchMovies) {
    searchMovies({ query: query, page: nextPage });
  }
}
