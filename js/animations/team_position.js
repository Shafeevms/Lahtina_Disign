import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const head = document.querySelector('.team__head');
const topTitle = document.querySelector('.top');

// const picTl = gsap.timeline({
//   scrollTrigger: {
//     markers: true,
//     trigger: '.team',
//     start: '12.5% center',
//     end: 'bottom center',
//     scrub: true,
//     pin: '.team__page_1',
//   }
// })

// picTl
//   .to('.test_1', { opacity: 1, duration: 2, ease: 'power4'})
//   .to('.test_2', { x: 0, duration: 2, ease: 'power4', delay: 0.5})
//   .to('.test_3', { y: 0, opacity: 1, duration: 2, ease: 'power4.inOut', delay: 0.5})


// pinned head height 120vh

const tlPage1 = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: '.team',
    start: '40% center',
    end: 'bottom center',
    scrub: true,
    pin: head,
  }
})

// opacity BIG LETTERS

const tlTeam = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: '.team',
    start: '-40% center',
    end: '-3% center',
    scrub: true,
  }
});
tlTeam
  .to(topTitle, {
    opacity: 0,
    duration: 2
  })



