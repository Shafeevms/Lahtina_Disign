import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from'gsap/CSSPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, CSSPlugin, ScrollToPlugin);

const teamBgContainer = document.querySelector('.team__bgcontainer');
const teamLeft = document.querySelector('.team__list_left');
const teamRight = document.querySelector('.team__list_right');
const teamSection = document.querySelector('.team');


//  уходит бэкграунд

gsap.fromTo(teamBgContainer, {y: '-20px'},{
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
  });

// check in different breakpoints

// gsap.to(window, {
//   scrollTrigger: {
//     trigger: teamSection,
//     start: "20% center",
//     end: "80% center",
//     markers: true,
//     toggleActions: 'restart none restart none',
//   },
//   duration: 0.5,
//   ease: 'power1.out',
//   scrollTo: {
//     y: '#team',
//     offsetY: 0,
//   }
// });


