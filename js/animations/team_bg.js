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
    // markers: true,
    trigger: '.team',
    start: '-20% center',
    end: '40% center',
    scrub: true,
  }
});

// const layouts = ['first', 'second', 'third'];
// const flipContainer = document.querySelector('.team__container');
// let count = 0;
//
//
// const myFunc = () => {
//   const state = Flip.getState('.team__title, .team__subtitle', {
//     props: 'align-items, justify-content',
//     simple: true,
//   });
//
//   flipContainer.classList.add(layouts[count]);
//
//
//   Flip.from(state, {
//     trigger: '.team',
//     absolute: true,
//     stagger: 0.07,
//     duration: 1,
//     ease: 'power2.inOut',
//     // spin: curLayout === 0, // only spin when going to the "final" layout
//     simple: true,
//     onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {
//       opacity: 1,
//       delay: animation.duration() - 0.1
//     }),
//     onLeave: elements => gsap.to(elements, {opacity: 0})
//   });
//
//   if(count < layouts.length - 1) {
//     gsap.delayedCall(1, myFunc);
//     flipContainer.classList.remove(layouts[count]);
//     ++count;
//   } else {
//     console.log(123);
//   }
// }
//
// gsap.delayedCall(0, myFunc);
//

