import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const headerSwiper = new Swiper('.hero__swiper', {
  autoplay: true,
  speed: 4000,
  loop: true,
  effect: 'fade',
  parallax: true,
});

const portfolioSwiper = new Swiper('.portfolio__swiper', {
  autoplay: true,
  speed: 2000,
  loop: true,
  slidesPerView: 3,
});


