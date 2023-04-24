import { gsap } from 'gsap';
import { scroller } from './smoothskroller.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export const toggleAnimationOnMediaQuery = (elements, speedArray, media) => {
  const mediaQuery = window.matchMedia(`(max-width: ${media}px)`);

  mediaQuery.addEventListener('change', () => {
    controlSpeedAnimation(elements, speedArray, mediaQuery);
  });

  window.addEventListener('load', () => {
    controlSpeedAnimation(elements, speedArray, mediaQuery);
  })
};

const controlSpeedAnimation = (elementsArray, speedArray, mediaQuery) => {

  if (mediaQuery.matches) {
    elementsArray.forEach((el, index) => {
      scroller.effects(elementsArray[index], {speed: 1});
    })
    ScrollTrigger.refresh();
  } else {
    elementsArray.forEach((el, index) => {
      scroller.effects(elementsArray[index], {speed: speedArray[index]});
    })
    ScrollTrigger.refresh();
  }
};
