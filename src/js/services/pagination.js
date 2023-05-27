import api from './api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const itemsPerPage = 10;
let page = 1;
let currentPage = page;

const totalItems = 500;
const visiblePages = 5;
const searchQuery = 'example';

const pagination = new Pagination(document.getElementById('pagination'), {
  totalItems: totalItems,
  itemsPerPage: itemsPerPage,
  visiblePages: visiblePages,
  centerAlign: true,
});

pagination.on('afterMove', event => {
  const page = event.page;
  currentPage = page;
  console.log('Current Page:', currentPage);
  getData(page);
});

async function getData(page) {
  try {
    const response = await api.fetchMoviesWithQuery(searchQuery, page);
    const data = response.data;
    renderData(data.results);
    pagination.setTotalItems(data.total_results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderData(items) {
  const container = document.getElementById('posters');
  const existingElements = Array.from(container.children);

  existingElements.forEach((element, index) => {
    if (items[index]) {
      element.textContent = items[index].name;
    }
  });

  for (let i = existingElements.length; i < items.length; i++) {
    const element = document.createElement('div');
    element.textContent = items[i].name;
    container.appendChild(element);
  }
}

getData(page);
