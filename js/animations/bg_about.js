import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toggleAnimationOnMediaQuery } from './toggleAnimation.js';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
const aboutSection = document.querySelector('.about');
const aboutSpeedElements = Array.from(aboutSection.querySelectorAll('[data-speed]'));
const aboutSpeedArray = ['0.6', '1.8', '1.1', '1.1', '0.88', '0.93'];


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

toggleAnimationOnMediaQuery(aboutSpeedElements, aboutSpeedArray, 540);
