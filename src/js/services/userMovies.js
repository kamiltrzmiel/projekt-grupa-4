export class UserMovies {
  //tablica w której przechowywane są filmy zapisane przez użytkownika
  #movies = [];

  //konstruktor pobiera z localStorage dane i zapisuje je do tablicy, jeśli ich nie ma tworzy pustą tablicę.
  constructor() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    movies ? (this.#movies = movies) : (this.#movies = []);
  }

  //metoda sprawdza czy dany film nie jest już w localStorage zmienia mu typ w zależności od potrzeby oraz jeśli warunki są odpowiednie wrzuca go do local storage.
  checkMovie(movie, array, type) {
    movie.type = type;
    for (let i = 0; i < array.length; i++) {
      if (+array[i].id === +movie.id) {
        if (array[i].type === type) {
          return;
        }
        this.#movies[i].type = type;
        localStorage.setItem('movies', JSON.stringify(this.#movies));
        return;
      }
    }
    this.#movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.#movies));
  }

  //metoda dodaje podstawowe informacje o filmie do bazy danych;
  addMovie(element, type) {
    const movie = {
      id: element.id,
      title: element.title,
      poster_path: element.poster_path,
      vote_average: element.vote_average,
      release_date: element.release_date,
      genre_ids: element.genres.map(genre => genre.id),
    };
    type === 'watched' ? (movie.type = 'watched') : (movie.type = 'queued');
    this.checkMovie(movie, this.#movies, type);
  }
}
