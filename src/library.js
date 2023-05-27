import './sass/main.scss';
import './js/services/detailModal';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { initializeLibrary } from './js/services/loadMovies';
import { moviesLoading } from './js/services/loader';

reloadHeader();
setRegisterAndSignUp();

const watchedBtn = document.getElementById('user-watched-btn');
watchedBtn.focus();

moviesLoading();
initializeLibrary('watched');
