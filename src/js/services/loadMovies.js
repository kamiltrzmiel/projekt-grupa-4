import { getUser, getMovies } from './firebase';

export const loadMovies = async () => {
  const user = await getUser();
  const data = getMovies(user);
  console.log(data);
  return data;
};
