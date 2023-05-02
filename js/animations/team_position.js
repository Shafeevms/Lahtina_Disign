import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { controlSpeed, toggleAnimationOnMedia } from './toggleAnimation.js';

const topTitle = document.querySelector('.top');
const upList = document.querySelector('.team__list_up');
const bottomList = document.querySelector('.team__list_low');
const teamSection = document.querySelector('.team__container');
const teamSpeedElements = Array.from(teamSection.querySelectorAll('[data-speed]'));
const teamSpeedArray = ['0.8', '0.9'];
const mm = gsap.matchMedia();

mm.add('(min-width: 1024px)', () => {
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

toggleAnimationOnMedia(1024, controlSpeed, teamSpeedElements, teamSpeedArray);
