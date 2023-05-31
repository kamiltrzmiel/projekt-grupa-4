import { getUser, saveMovieToDatabase, addMovie, removeMovieFromDatabase } from './firebase';
import Notiflix from 'notiflix';
import { initializeLibrary } from './loadMovies';
import { closeDetailModal } from './detailModal';
//tworzy nowy obiekt który ma w sobie dane i medoty związane z bazą danych

//Funkcja pobiera z dokumentu przyciski dodania do obejrzanych i do kolejki oraz przypisuje im funkcje w eventListnerach
//Funkcja przyjmuje jako argument obiekt - w domyśle dane pobrane z TMDB dane jednego filmu
//dlatego najlepiej dorzucić ją do funkcji tworzenia Modala która powinna operować na tym samym obiekcie.

const saveMovie = async (data, type) => {
  const user = await getUser();
  if (!user) {
    Notiflix.Notify.warning('Please first login');
  } else {
    const dataToSave = addMovie(data, type);
    saveMovieToDatabase(dataToSave, user);
    Notiflix.Notify.success(`Movie saved to ${type} successfully!`);
  }
};

const deleteMovie = async data => {
  const user = await getUser();
  if (!user) {
  } else {
    removeMovieFromDatabase(data, user);
    Notiflix.Notify.success(`Movie removed successfully!`);
  }
};

//TRZEBA WYRENDEROWAĆ OD NOWA RENDER
export const setModalButtons = (data, type = null) => {
  const path = window.location.pathname;
  const watchBtn = document.getElementById('modal-watched');
  const queueBtn = document.getElementById('modal-queue');
  if (type === 'watched') {
    watchBtn.classList.add('hidden');
    queueBtn.innerText = 'Move back to queue';
    queueBtn.addEventListener('click', async () => {
      await saveMovie(data, 'queued');
      if (path === '/library.html') {
        initializeLibrary('watched');
      }

      closeDetailModal();
    });
  } else if (type === 'queued') {
    watchBtn.innerText = 'Move to watched';
    watchBtn.addEventListener('click', async () => {
      await saveMovie(data, 'watched');
      if (path === '/library.html') {
        initializeLibrary('queued');
      }
      closeDetailModal();
    });
    queueBtn.innerText = 'Remove from queue';
    queueBtn.classList.add('modal__btn--queued--remove');
    queueBtn.addEventListener('click', async () => {
      await deleteMovie(data);
      if (path === '/library.html') {
        initializeLibrary('queued');
      }
      closeDetailModal();
    });
  } else if (!type) {
    watchBtn.addEventListener('click', async () => {
      await saveMovie(data, 'watched');
      closeDetailModal();
    });
    queueBtn.addEventListener('click', async () => {
      await saveMovie(data, 'queued');
      closeDetailModal();
    });
  }
};
