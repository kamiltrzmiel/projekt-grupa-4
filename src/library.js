import './sass/main.scss';
import './js/services/detailModal';
import './js/services/footer';
import { initializeLibrary } from './js/services/loadMovies';
import { moviesLoading } from './js/services/loader';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { infiniteScrollLibrary } from './js/services/infiniteScroll';

reloadHeader();
setRegisterAndSignUp();

const watchedBtn = document.getElementById('user-watched-btn');
watchedBtn.style.backgroundColor = 'var(--text-orange)';
watchedBtn.style.borderColor = 'var(--text-orange)';

moviesLoading();
initializeLibrary('watched');
infiniteScrollLibrary();
