import { UserMovies } from './userMovies';
export const userMovies = new UserMovies();

export const setModalButtons = data => {
  const watchBtn = document.getElementById('modal-watched');
  const queueBtn = document.getElementById('modal-queue');
  watchBtn.addEventListener('click', () => userMovies.addMovie(data, 'watched'));
  queueBtn.addEventListener('click', () => userMovies.addMovie(data, 'queued'));
};
