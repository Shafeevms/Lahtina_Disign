import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';

const head = document.querySelector('.team__head');
const topTitle = document.querySelector('.top');
const upList = document.querySelector('.team__list_up');
const bottomList = document.querySelector('.team__list_low');


// pinned head height 120vh


// const moveList = gsap.timeline({
//   // scrollTrigger: {
//   //   // markers: true,
//   //   trigger: '.team',
//   //   start: '10% center',
//   //   end: '70% center',
//   //   scrub: true,
//   // },
//   ease: 'power1'
// })


ScrollTrigger.create({
  trigger: '.team',
  start: '10% center',
  end: '70% center',
  scrub: true,
  onEnter: () => {
    gsap.to(upList, {
        x: '-20%',
        duration: 2,
      })
    gsap.to(bottomList, {
        x: '20%',
        duration: 2,
      });
  }
});

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
    duration: 2,
  });

