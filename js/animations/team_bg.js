import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, CSSPlugin, ScrollToPlugin);

const teamBgContainer = document.querySelector('.team__bg');


//  уходит бэкграунд

gsap.fromTo(teamBgContainer, {y: '-20px'}, {
  duration: 1,
  opacity: 0,
  rotateX: 135,
  scale: 1,
  perspective: 100,
  y: '100%',
  ease: 'power2.inOut',
  scrollTrigger: {
    markers: true,
    trigger: '.team',
    start: '-20% center',
    end: '40% center',
    scrub: true,
  }
});