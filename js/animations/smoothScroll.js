import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


const sectionPointer = document.querySelector('.options');

const scrollToSection = (e) => {
  e.preventDefault();
  const target = e.target.hash;
  gsap.to(window, { scrollTo: target });
}

sectionPointer.addEventListener('click', scrollToSection);


