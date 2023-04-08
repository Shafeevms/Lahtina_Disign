import { gsap } from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const testElement = document.querySelector('.portfolio__title');

gsap.to(testElement, {
  duration: 1,
  scrambleText: 'ПОРТФОЛИО',
  scrollTrigger: {
    trigger: '.portfolio',
    toggleActions: 'play reset play reset'
  }
})