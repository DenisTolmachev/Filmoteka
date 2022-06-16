import Notiflix from 'notiflix';
import { getFromStorage } from './storage';
import oneMovieCard from '../template/oneMoviecard.hbs';
import { refs } from './refs.js';
import { dynamicRefs } from './dynamicRefs';
import { showMovieCard } from './modal_movie';
import { getDataFilms } from '../api/getDataFilms';

const { libraryGallery, btnWatched, btnQueue } = refs.library;

const dataCombine = movie => {
  return {
    ...movie,
    year: movie.release_date.slice(0, 4),
  };
};
export const requestForWatched = async () => {
  const liveRefs = dynamicRefs();
  libraryGallery.innerHTML = '';
  const watchedArr = getFromStorage('filmsWatched');
  if (watchedArr.length === 0) {
    Notiflix.Notify.info("You don't have watched movies");
  } else {
    const arrayForRender = watchedArr.map(id => {
      fetchById(id).then(result => {
        const { data } = result;
        data.release_date = slicins(data.release_date);
        libraryGallery?.insertAdjacentHTML('beforeend', oneMovieCard(data));
    });
  }
  btnWatched.classList.add('orange');
  btnQueue.classList.remove('orange');
};

btnWatched?.addEventListener('click', requestForWatched);
libraryGallery?.addEventListener('click', showMovieCard);
