import { getUser, getMovies } from './firebase';
import { render } from './render';

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
    return {
      ...movie,
      genre_ids: convertGenresToArray(movie.genres),
    };
  });
  const filteredMovieArray = updatedMovieArray.filter(movie => movie.type === type);
  return filteredMovieArray;
};

export const initializeLibrary = async type => {
  const data = await getMoviesArray(type);
  if (data.length === 0) {
    alert(`There are no movies in your ${type} list!`);
    return;
  }
  render(data, containerEl, true);
};

watchedBtn.addEventListener('click', () => initializeLibrary('watched'));
queuedBtn.addEventListener('click', () => initializeLibrary('queued'));
