import api from './api';
import { render } from './render';
import translateIdToGenre from './genre';
const renderElement = document.getElementById('posters');
const closeDetailModalBtn = document.getElementById('hide-modal');

renderElement.addEventListener('click', e => {
  const detailDialogEl = document.getElementById('modal-backdrop');
  const detail = e.target;
  console.log(detail);

  const fetchTrendingMovies = async page => {
    try {
      const response = await api.fetchTrendingMovies(page);
      const data = response.data.results;
      console.log(data);
      render(data, renderElement, true);

      data.map(item => {
        item.poster_path
          ? (item.poster_path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`)
          : (item.poster_path = placeholder);
        detailDialogEl.innerHTML = `
      <div class="container">
        <div id="modal-wrapper" class="modal">
        <button id="hide-modal" class="footer-modal__closeBtn">
        x
      </button>
          <img id="modal-image" src="${item.poster_path}" class="modal__image" alt="${
          item.title
        }" />
          <div id="modal-text" class="modal__text">
            <div class="modal__description">
              <h3 class="modal__title">${item.title}</h3>
            </div>
            <div id="modal-info" class="modal__info">
              <p class="modal__info--classification">Vote / Votes</p>
              <p class="modal__info--detailed">
                <span class="modal__info--score">${item.vote_average}</span> /
                <span class="modal__info--score--second">${item.vote_count}</span>
              </p>
            </div>
            <div id="modal-info" class="modal__info">
              <p class="modal__info--classification">Popularity</p>
              <p class="modal__info--detailed">${item.popularity}</p>
            </div>
            <div id="modal-info" class="modal__info">
              <p class="modal__info--classification">Original title</p>
              <p class="modal__info--detailed">${item.original_title}</p>
            </div>
            <div id="modal-info" class="modal__info">
              <p class="modal__info--classification">Genre</p>
              <p class="modal__info--detailed">${item.genre_ids.map(
                genre => ` ${translateIdToGenre(genre)}`,
              )}</p>
            </div>
            <article id="modal-article" class="modal__article">
              <h4 class="modal__article--title">ABOUT</h4>
              <p id="modal-article-description" class="modal__article--description">
                ${item.overview}
              </p>
            </article>
            <div class="modal__buttons">
              <button id="modal-watched" class="modal__btn--watched">ADD TO WATCHED</button>
              <button id="modal-queue" class="modal__btn--queued">ADD TO QUEUE</button>
            </div>
          </div>
        </div>
      </div>
   
      `;
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchTrendingMovies();
  detailDialogEl.showModal();
});
