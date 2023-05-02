import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { toggleAnimationOnMedia } from './animations/toggleAnimation.js';

const portfolioSwiperContainer = document.querySelector('.portfolio__swiper');


const headerSwiper = new Swiper('.hero__swiper', {
  autoplay: true,
  speed: 4000,
  loop: true,
  effect: 'fade',
  parallax: true,
});

const portfolioSwiper = new Swiper(portfolioSwiperContainer, {
  autoplay: true,
  speed: 2000,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 3,
  breakpoints: {
    240: {
      slidesPerView: 1,
    },
    570: {
      slidesPerView: 2,
    },
    840: {
      slidesPerView: 3,
    }
  }
});


export const togglePortfolioSwiper = (mediaQuery) => {
  if (mediaQuery.matches) {
    portfolioSwiperContainer.classList.remove('visually-hidden');
    portfolioSwiper.update();
  } else {
    portfolioSwiperContainer.classList.add('visually-hidden');
  }
};


toggleAnimationOnMedia(900, togglePortfolioSwiper);
