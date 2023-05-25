import './sass/main.scss';
import './js/services/detailModal';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { initializeLibrary } from './js/services/loadMovies';

const containerEl = document.getElementById('posters');

reloadHeader();
setRegisterAndSignUp();

initializeLibrary('watched');
