import { gsap } from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const testElement = document.querySelector('.portfolio__title');
const text = testElement.dataset.content;

gsap.to(testElement, {
  duration: 1,
  scrambleText: text,
  scrollTrigger: {
    trigger: '.portfolio__title',
    toggleActions: 'play reset play reset'
  }
})
