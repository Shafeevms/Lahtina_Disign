import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
const mediaQuery = window.matchMedia('(max-width: 540px)');
const aboutSection = document.querySelector('.about');
const customSpeedElements = Array.from(aboutSection.querySelectorAll('[data-speed]'));
const tempSpeedArray = ['0.6', '1.8', '1.1', '1.1', '0.88', '0.93'];

mm.add('(min-width: 540px)', () => {
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

mediaQuery.addEventListener('change', e => {
  if (e.matches) {
    customSpeedElements.forEach((el, index) => {
      el.dataset.speed = '1';
    });
  } else {
    customSpeedElements.forEach((el, index) => {
      el.dataset.speed = String(tempSpeedArray[index]);
    });
  }
});

window.addEventListener('load', () => {
  if (mediaQuery.matches) {
    console.log(1);
    customSpeedElements.forEach((el) => {
      console.log(2);
      el.dataset.speed = '1';
    });
  }
})

//TODO решить вопрос с data-speed при load страницы
// https://greensock.com/docs/v3/Plugins/ScrollSmoother
