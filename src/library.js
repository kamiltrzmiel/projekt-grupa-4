import './sass/main.scss';
import { reloadHeader, setRegisterAndSignUp } from './js/services/firebase';
import { loadMovies } from './js/services/loadMovies';
reloadHeader();
setRegisterAndSignUp();

loadMovies();
