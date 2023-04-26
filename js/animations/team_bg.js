import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, CSSPlugin, ScrollToPlugin);

const teamBgContainer = document.querySelector('.team__bg');
const mm = gsap.matchMedia();

mm.add('(min-width: 786px)', () => {

  gsap.fromTo(teamBgContainer, {y: '-20px'}, {
    duration: 1,
    opacity: 0,
    rotateX: 135,
    scale: 1,
    perspective: 100,
    display: 'none',
    y: '100%',
    ease: 'power2.inOut',
    scrollTrigger: {
      // markers: true,
      trigger: '.team',
      start: '-20% center',
      end: '40% center',
      scrub: true,
    }
  });
});

