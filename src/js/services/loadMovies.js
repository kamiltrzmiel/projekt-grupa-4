import { getUser, getMovies } from './firebase';
import { render } from './render';
import { moviesLoading } from './loader';

const containerEl = document.getElementById('posters');
const watchedBtn = document.getElementById('user-watched-btn');
const queuedBtn = document.getElementById('user-queue-btn');

const getMoviesObject = async () => {
  const user = await getUser();
  const data = await getMovies(user);
  return data;
};

const convertGenresToArray = string => {
  return string.split(',').map(Number);
};

const getMoviesArray = async type => {
  const object = await getMoviesObject();
  const movieArray = Object.values(object);
  const updatedMovieArray = movieArray.map(movie => {
    if (movie.genres) {
      return {
        ...movie,
        genre_ids: convertGenresToArray(movie.genres),
      };
    } else {
      return {
        ...movie,
        genre_ids: [],
      };
    }
  });
  const filteredMovieArray = updatedMovieArray.filter(movie => movie.type === type);
  return filteredMovieArray;
};

export const initializeLibrary = async type => {
  moviesLoading();
  const data = await getMoviesArray(type);
  if (data.length === 0) {
    alert(`There are no movies in your ${type} list!`);
    return;
  }
  render(data, containerEl, true);
};

watchedBtn.addEventListener('click', () => {
  initializeLibrary('watched');
  watchedBtn.style.backgroundColor = 'var(--text-orange)';
  watchedBtn.style.borderColor = 'var(--text-orange)';
  queuedBtn.style.backgroundColor = 'transparent';
  queuedBtn.style.borderColor = 'var(--text-white)';
});
queuedBtn.addEventListener('click', () => {
  initializeLibrary('queued');
  watchedBtn.style.backgroundColor = 'transparent';
  watchedBtn.style.borderColor = 'var(--text-white)';
  queuedBtn.style.backgroundColor = 'var(--text-orange)';
  queuedBtn.style.borderColor = 'var(--text-orange)';
});
