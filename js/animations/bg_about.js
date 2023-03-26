import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bgTimeline = gsap.timeline({
  ease: 'power2.out',
  paused: true,
});

bgTimeline
  .to('.about', {
    backgroundColor: '#2c1e13',
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