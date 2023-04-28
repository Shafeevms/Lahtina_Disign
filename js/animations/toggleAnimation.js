import { gsap } from 'gsap';
import { scroller } from './smoothskroller.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export const toggleAnimationOnMedia = (num, func, ...rest) => {
  const mediaQuery = window.matchMedia(`(max-width: ${num}px)`);

  mediaQuery.addEventListener('change', () => {
    func(mediaQuery, ...rest);
  });

  window.addEventListener('load', () => {
    func(mediaQuery, ...rest);
  })
}

export const controlSpeed = (mediaQuery, elementsArray, speedArray) => {
  if (mediaQuery.matches) {
    elementsArray.forEach((el, index) => {
      scroller.effects(elementsArray[index], { speed: 1 });
    })
    ScrollTrigger.refresh();
  } else {
    elementsArray.forEach((el, index) => {
      scroller.effects(elementsArray[index], { speed: speedArray[index] });
    })
    ScrollTrigger.refresh();
  }
}
