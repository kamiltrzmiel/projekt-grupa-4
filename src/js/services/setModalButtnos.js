import { getUser, saveMovieToDatabase, addMovie } from './firebase';

//tworzy nowy obiekt który ma w sobie dane i medoty związane z bazą danych

//Funkcja pobiera z dokumentu przyciski dodania do obejrzanych i do kolejki oraz przypisuje im funkcje w eventListnerach
//Funkcja przyjmuje jako argument obiekt - w domyśle dane pobrane z TMDB dane jednego filmu
//dlatego najlepiej dorzucić ją do funkcji tworzenia Modala która powinna operować na tym samym obiekcie.

const saveMovie = async (data, type) => {
  const user = await getUser();
  if (!user) {
    alert('Please first login');
  } else {
    const dataToSave = addMovie(data, type);
    console.log(dataToSave);
    saveMovieToDatabase(dataToSave, user);
    alert(`Movie saved to ${type} successfully!`);
  }
};

export const setModalButtons = data => {
  const watchBtn = document.getElementById('modal-watched');
  const queueBtn = document.getElementById('modal-queue');
  watchBtn.addEventListener('click', async () => await saveMovie(data, 'watched'));
  queueBtn.addEventListener('click', async () => await saveMovie(data, 'queued'));
};
