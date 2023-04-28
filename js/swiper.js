import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const mediaQuery = window.matchMedia(`(max-width: 900px)`);

const headerSwiper = new Swiper('.hero__swiper', {
  autoplay: true,
  speed: 4000,
  loop: true,
  effect: 'fade',
  parallax: true,
});

const enablePortfolioSwiper = () => {
  const portfolioSwiper = new Swiper('.portfolio__swiper', {
    autoplay: true,
    speed: 2000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  });
}

mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    console.log(1);
  } else {
    console.log(0);
  }
})

enablePortfolioSwiper();
