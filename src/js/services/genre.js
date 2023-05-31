import genresTranslation from '../config/genresTranslation.json';

const translateIdToGenre = id => {
  const translatedName = genresTranslation.genres.find(genre => genre.id === id).name;
  return translatedName;
};

export default translateIdToGenre;
