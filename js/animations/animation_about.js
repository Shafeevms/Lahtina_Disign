import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {CustomEase} from 'gsap/CustomEase';
import {CustomBounce} from 'gsap/CustomBounce';
import {ScrollSmoother} from 'gsap/ScrollSmoother';


gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce, ScrollSmoother);

const imgVictoria = document.querySelector('.about__img');
const aboutTitle = document.querySelector('.about__title');
const titleDesign = document.querySelector('.about__titlewrapper')

const line1 = document.querySelector('.line__1');
const line2 = document.querySelector('.line__2');
const line3 = document.querySelector('.line__3');
const line4 = document.querySelector('.line__4');

const logo = document.querySelector('.hero__logo');


const scroller = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
  wrapper: '.wrapper',
  content: '.content',
});


// Lahtina

ScrollTrigger.create({
  // markers: true,
  start: 'top 70%',
  end: '70% 70%',
  trigger: '.about',
  onEnter: () => gsap.to(imgVictoria, {opacity: 1, duration: 1.5}),
  onLeave: () => {
    gsap.to(imgVictoria, {opacity: 0, duration: 1});
    // gsap.to(aboutTitle, { opacity: 0, duration: 1 });
  },
  // onUpdate: (self) => gsap.to(imgVictoria, {ease: 'power2.out', y: self.progress * 1100 }),
  onEnterBack: () => {
    gsap.to(imgVictoria, {opacity: 1, duration: 1.5});
    gsap.to(aboutTitle, {opacity: 1, duration: 1});
  },
  onLeaveBack: () => gsap.to(imgVictoria, {opacity: 0, duration: .5}),
});


// =======  background ABOUT:

const bgTimeline = gsap.timeline({
  ease: 'power2.out',
  paused: true,
});

bgTimeline
  .to('.about', {
    backgroundColor: '#21170F',
    duration: 4
  });

ScrollTrigger.create({
  // markers: true,
  trigger: '.about',
  start: '100 center',
  end: 'bottom bottom',
  scrub: true,
  onUpdate: (self) => {
    const progress = +self.progress.toFixed(2);
    bgTimeline.progress(progress / 2);
  },
});

const tlTitleWrapper = gsap.timeline({
  duration: 0.5,
  ease: 'Sine.easeIn',
  scrollTrigger: {
    // markers: true,
    trigger: '.about',
    start: 'top 80%',
    end: 'top -15%',
    toggleActions: 'play reverse play reverse'
  }
});

ScrollTrigger.create({
  trigger: '.team',
  preventOverlaps: true,
  fastScrollEnd: true,
})


tlTitleWrapper.to(line1, {height: '100%'})
  .to(line2, {width: '100%'})
  .to(line3, {height: '100%'})
  .to(line4, {width: '100%'});

