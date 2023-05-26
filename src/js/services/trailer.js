import api from './api';

const defTrailerUrl = 'https://www.youtube.com/embed/';
const trailerEl = document.querySelector('.trailer-btn');

const fetchTrailerById = async id => {
  try {
    const response = await api.fetchTrailerById(id);
    const item = response.data;
    //...//
  } catch (error) {
    console.log(error);
  }
};
fetchTrailerById(id);
