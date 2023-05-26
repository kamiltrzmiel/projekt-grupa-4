import api from './api';
const renderElement = document.getElementById('posters');
import { setModalButtons } from './setModalButtnos';

renderElement.addEventListener('click', e => {
  const detailDialogEl = document.getElementById('modal-backdrop');

  if (!e.target.parentNode.classList.contains('posters__box')) return;

  const id = e.target.parentNode.dataset.id;
  detailDialogEl.innerHTML = '';

  const fetchMovieById = async id => {
    try {
      const response = await api.fetchMovieById(id);
      const item = response.data;
      // console.log(item);
      const genres = item.genres.map(movie => movie.name).join(', ');

      item.poster_path
        ? (item.poster_path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`)
        : (item.poster_path = placeholder);
      detailDialogEl.innerHTML = `<div class="container">
      <div id="modal-wrapper" class="modal">
      <button id="hide-modal" class="footer-modal__closeBtn">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
          <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>
        </svg>
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
                      <span class="modal__info--score">${item.vote_average.toFixed(1)}</span> /
                      <span class="modal__info--score--second">${item.vote_count}</span>
                    </p>
                  </div>
                  <div id="modal-info" class="modal__info">
                    <p class="modal__info--classification">Popularity</p>
                    <p class="modal__info--detailed">${item.popularity.toFixed(0)}</p>
                  </div>
                  <div id="modal-info" class="modal__info">
                    <p class="modal__info--classification">Original title</p>
                    <p class="modal__info--detailed">${item.original_title}</p>
                  </div>
                  <div id="modal-info" class="modal__info">
                    <p class="modal__info--classification">Genre</p>
                    <p class="modal__info--detailed">${genres}</p>
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
            </div>`;
      const closeDetailModalBtn = document.getElementById('hide-modal');
      closeDetailModalBtn.addEventListener('click', () => detailDialogEl.close());
      setModalButtons(item);
      detailDialogEl.addEventListener('click', e => {
        if (e.currentTarget === e.target) {
          detailDialogEl.close();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchMovieById(id);
  detailDialogEl.showModal();
});
