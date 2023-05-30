import { getUser, getMovies } from './firebase';
import { render } from './render';
import { moviesLoading } from './loader';

const containerEl = document.getElementById('posters');
const watchedBtn = document.getElementById('user-watched-btn');
const queuedBtn = document.getElementById('user-queue-btn');
const postersEl = document.getElementById('posters');

const getMoviesObject = async () => {
  const user = await getUser();
  const data = await getMovies(user);
  return data;
};

const convertGenresToArray = string => {
  return string.split(',').map(Number);
};

const getMoviesArray = async () => {
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
  return updatedMovieArray;
};

export const getSingleMovieFromUserDatabase = async id => {
  const object = await getMoviesArray();
  console.log(object);
  const movie = object.find(movie => +movie.id === +id);
  console.log(movie);
  return movie;
};

const filterMovieArray = async type => {
  const movies = await getMoviesArray();
  const filteredMovieArray = movies.filter(movie => movie.type === type);
  return filteredMovieArray;
};

const initializeButtons = () => {
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
};

export const initializeLibrary = async type => {
  moviesLoading();
  initializeButtons();
  const data = await filterMovieArray(type);
  if (data.length === 0) {
    //alert(`There are no movies in your ${type} list!`);
    postersEl.innerHTML = `<div class="posters__error">There are no movies in your ${type} list! <br><br>
    If you wish to add movie to your library please go back to home page, <br> click on a movie and add it to your watched or queued list ;) </div>`;
    return;
  }
  render(data, containerEl, true);
};
