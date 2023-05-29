import './sass/main.scss';
import './js/services/detailModal';
import './js/services/footer';
import './js/services/trailer';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { initializeLibrary, initializeButtons } from './js/services/loadMovies';
import { moviesLoading } from './js/services/loader';

reloadHeader();
setRegisterAndSignUp();

const watchedBtn = document.getElementById('user-watched-btn');
watchedBtn.style.backgroundColor = 'var(--text-orange)';
watchedBtn.style.borderColor = 'var(--text-orange)';

moviesLoading();
initializeButtons();
initializeLibrary('watched');
