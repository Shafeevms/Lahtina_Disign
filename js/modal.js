import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { projectsImg } from './imgsData.js';

const modalContainer = document.querySelector('.wrapper');

const slide = (img) => `<div class="portfolio__slide swiper-slide"><img class="slide-img modal__img" src="${img}"></div>`;

const createProjectSlides = (numOfCollection, imgCollection) => {
  return imgCollection[numOfCollection].reduce((acc, el) => {
    acc.push(slide(el));
    return acc;
  }, []);
}

const createModalWindow = (title) => {
  const div = document.createElement('div');

  div.classList.add('modal');
  div.innerHTML = `
    <div class="modal__content">
      <button class="modal__close"></button>
      <h2 class="modal__title">${title}</h2>
      <div class="modal__swiper swiper">
        <div class="swiper-wrapper"></div>
      </div>
        <div class="swiper-scrollbar"></div>
    </div>`;

  div.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('modal__close')) {
      div.classList.remove('visible');
      setTimeout(() => div.remove(), 300);
    }
  });

  return div;
};

export const openModal = (collection, title) => {
  const modal = createModalWindow(title);
  const swiperContainer = modal.querySelector('.modal__swiper');

  modalContainer.appendChild(modal);


  const modalSwiper = new Swiper(swiperContainer, {
    autoplay: true,
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 3,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  modalSwiper.addSlide(1, createProjectSlides(collection, projectsImg));
  modalSwiper.update();
  modal.classList.add('visible');
};
