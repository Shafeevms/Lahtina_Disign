import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from'gsap/CSSPlugin';


const teamBgContainer = document.querySelector('.team__bgcontainer');
const teamLeft = document.querySelector('.team__list_left');
const teamRight = document.querySelector('.team__list_right');


gsap.registerPlugin(ScrollTrigger, CSSPlugin);

//  уходит бэкграунд

gsap.to(teamBgContainer, {
  duration: 1,
  opacity: 0,
  rotateX: 135,
  scale: 1,
  perspective: 100,
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

//

gsap.fromTo(teamLeft, {
  x: '-100%',
  y: '70%',
  duration: 2,
  filter: 'grayscale(50%)',
},
  {
    x: '100%',
    y: 0,
    filter: 'grayscale(0)',
    scrollTrigger: {
      // markers: true,
      trigger: '.team',
      start: '-50% center',
      end: '25% center',
      scrub: true,
      pinSpacing: true,
    }
  })

gsap.fromTo(teamRight, {
    x: '100%',
    y: '80%',
    duration: 2,
    filter: 'grayscale(50%)',
  },
  {
    x: '-100%',
    y: 0,
    filter: 'grayscale(0)',
    scrollTrigger: {
      // markers: true,
      trigger: '.team',
      start: '-50% center',
      end: '25% center',
      scrub: true,
    }
  })
