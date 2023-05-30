import api, { fetchTrailerById } from './api';
const renderElement = document.getElementById('posters');
import { setModalButtons } from './setModalButtnos';
const defTrailerUrl = 'https://www.youtube.com/embed/';
import playIcon from '../../assets/play-icon.png';
import placeholder from '../../assets/video-placeholder.jpg';
import { getSingleMovieFromUserDatabase } from './loadMovies';
import { getUser } from './firebase';

renderElement.addEventListener('click', e => {
  const detailDialogEl = document.getElementById('modal-backdrop');
  const body = document.querySelector('body');

  if (!e.target.parentNode.classList.contains('posters__box')) return;

  const id = e.target.parentNode.dataset.id;
  detailDialogEl.innerHTML = '';

  body.style.overflow = 'hidden';

  const fetchMovieById = async id => {
    try {
      const response = await api.fetchMovieById(id);
      const item = response.data;
      const genres = item.genres.map(movie => movie.name).join(', ');

      item.backdrop_path
        ? (item.backdrop_path = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)
        : (item.backdrop_path = placeholder);
      detailDialogEl.innerHTML = `
                <div class="container">
                <div id="modal-wrapper" class="modal">
                  <button id="hide-modal" class="footer-modal__closeBtn">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                     <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>
                    </svg>
                  </button>
                  <div class="trailer-btn-box">
                    <img id="modal-image" src="${item.backdrop_path}" class="modal__image" alt="${
        item.title
      }" />
                
                  <button class="trailer-btn hidden">
                    <img src="${playIcon}" alt="player icon" id="play-icon" class="trailer-btn__icon" />
                    </button>
                    
                </div>
                 <h3 class="modal__title">${item.title}</h3>
                <div id="trailer-container"></div>
                <div id="modal-text" class="modal__text">
                  <div class="modal__text__box">
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
                  </div>
                  <article id="modal-article" class="modal__article modal__text__box">
                    <h4 class="modal__article--title">ABOUT</h4>
                    <p id="modal-article-description" class="modal__article--description">
                      ${item.overview}
                    </p>
                  </article>
                </div>
                  <div class="modal__buttons">
                    <button id="modal-watched" class="modal__btn--watched">ADD TO WATCHED</button>
                    <button id="modal-queue" class="modal__btn--queued">ADD TO QUEUE</button>
                  </div>
              </div>
            </div>`;

      const closeDetailModal = () => {
        body.style.overflow = 'auto';
        detailDialogEl.close();
        trailerEl.innerHTML = '';
      };

      setModalButtons(item, (type = null));
      const user = await getUser();
      if (user) {
        const movie = await getSingleMovieFromUserDatabase(id);
        const type = movie.type;
        setModalButtons(item, type);
      }

      const closeDetailModalBtn = document.getElementById('hide-modal');
      closeDetailModalBtn.addEventListener('click', () => {
        closeDetailModal();
      });

      detailDialogEl.addEventListener('click', e => {
        if (e.currentTarget === e.target) {
          closeDetailModal();
        }
      });
      detailDialogEl.addEventListener('close', () => {
        closeDetailModal();
      });

      const trailersResponse = await fetchTrailerById(id);
      const trailerList = trailersResponse.data.results;
      const trailerBtn = document.querySelector('.trailer-btn');
      const trailerBox = document.querySelector('.trailer-btn-box');
      const trailerEl = document.getElementById('trailer-container');
      const trailer = trailerList.find(
        ({ official, type }) => type === 'Trailer' && official === true,
      );

      if (!trailer) {
        return;
      } else {
        trailerBtn.classList.remove('hidden');
        trailerBtn.addEventListener('click', () => {
          trailerBox.innerHTML = `<iframe src="${defTrailerUrl}${trailer.key}?autoplay=1&mute=1" title="YouTube video player" class="player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="autoplay" allowfullscreen></iframe>`;

          detailDialogEl.addEventListener('click', e => {
            const playIcon = document.getElementById('play-icon');

            if (e.target !== playIcon) {
              trailerEl.innerHTML = '';
            }
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchMovieById(id);
  detailDialogEl.showModal();
});
