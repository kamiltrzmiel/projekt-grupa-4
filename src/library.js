import './sass/main.scss';
import './js/services/detailModal';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { initializeLibrary } from './js/services/loadMovies';

reloadHeader();
setRegisterAndSignUp();

initializeLibrary('watched');
