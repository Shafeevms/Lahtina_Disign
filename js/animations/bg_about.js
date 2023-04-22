import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scroller } from './smoothskroller.js';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
const mediaQuery = window.matchMedia('(max-width: 540px)');
const aboutSection = document.querySelector('.about');
const customSpeedElements = Array.from(aboutSection.querySelectorAll('[data-speed]'));
const tempSpeedArray = ['0.6', '1.8', '1.1', '1.1', '0.88', '0.93'];

const controlSpeedAnimation = () => {
  if (mediaQuery.matches) {
    customSpeedElements.forEach((el, index) => {
      scroller.effects(customSpeedElements[index], {speed: 1});
    })
    ScrollTrigger.refresh();
  } else {
    customSpeedElements.forEach((el, index) => {
      scroller.effects(customSpeedElements[index], {speed: tempSpeedArray[index]});
    })
    ScrollTrigger.refresh();
  }
};

mm.add('(min-width: 541px)', () => {
  const bgTimeline = gsap.timeline({
    ease: 'power2.out',
    paused: true,
  });

  bgTimeline
    .to('.about', {
      backgroundColor: '#1B2645',
      duration: 4
    });

  ScrollTrigger.create({
    // markers: true,
    trigger: '.about',
    start: '100 center',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const progress = +self.progress.toFixed(2);
      bgTimeline.progress(progress );
    },
  });
});

mediaQuery.addEventListener('change', () => {
  controlSpeedAnimation();
});

window.addEventListener('load', () => {
  controlSpeedAnimation();
})
