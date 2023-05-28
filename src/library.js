import './sass/main.scss';
import './js/services/detailModal';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { initializeLibrary } from './js/services/loadMovies';
import { moviesLoading } from './js/services/loader';
import './js/services/footer';

reloadHeader();
setRegisterAndSignUp();

const watchedBtn = document.getElementById('user-watched-btn');
watchedBtn.style.backgroundColor = 'var(--text-orange)';
watchedBtn.style.borderColor = 'var(--text-orange)';

moviesLoading();
initializeLibrary('watched');
