import { UserMovies } from './userMovies';

//tworzy nowy obiekt który ma w sobie dane i medoty z localStorage
export const userMovies = new UserMovies();

//Funkcja pobiera z dokumentu przyciski dodania do obejrzanych i do kolejki oraz przypisuje im funkcje w eventListnerach
//Funkcja przyjmuje jako argument obiekt - w domyśle dane pobrane z TMDB dane jednego filmu
//dlatego najlepiej dorzucić ją do funkcji tworzenia Modala która powinna operować na tym samym obiekcie.

export const setModalButtons = data => {
  const watchBtn = document.getElementById('modal-watched');
  const queueBtn = document.getElementById('modal-queue');
  watchBtn.addEventListener('click', () => userMovies.addMovie(data, 'watched'));
  queueBtn.addEventListener('click', () => userMovies.addMovie(data, 'queued'));
};
