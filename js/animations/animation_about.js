import { gsap } from 'gsap';

import { bgTimeline } from './animations/timelines.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { ScrollSmoother } from "gsap/ScrollSmoother";



gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce, ScrollSmoother);

const scroller = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
  wrapper: '.wrapper',
  content: '.content',
});

const imgVictoria = document.querySelector('.about__img');
const aboutTitle = document.querySelector('.about__title');
const logo = document.querySelector('.hero__logo');


// Lahtina & title opacity
ScrollTrigger.create({
  markers: true,
  start: 'top 70%',
  end: '70% 70%',
  trigger: '.about',
  onEnter: () => gsap.to(imgVictoria, { opacity: 1, duration: 1.5 }),
  onLeave: () => {
    gsap.to(imgVictoria, { opacity: 0, duration: 1 });
    gsap.to(aboutTitle, { opacity: 0, duration: 1 });
  },
  // onUpdate: (self) => gsap.to(imgVictoria, {ease: 'power2.out', y: self.progress * 1100 }),
  onEnterBack: () => {
    gsap.to(imgVictoria, { opacity: 1, duration: 1.5 });
    gsap.to(aboutTitle, { opacity: 1, duration: 1 });
  },
  onLeaveBack: () => gsap.to(imgVictoria, { opacity: 0, duration: .5 }),
});


// =======  background ABOUT:
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
//
//
//
// const logoFlash = gsap.fromTo(
//   logo,
//   { opacity: 1 },
//   { opacity: 0, duration: 0.4, repeat: 2, yoyo: true }
// );
//
//
// gsap.set(logo, { opacity: 0 })
// const t1 = gsap.timeline();
// CustomBounce.create("myBounce", {strength: 0.6, squash: 3, squashID: "myBounce-squash"});
// const logoFall = gsap.from(logo, {duration: 2, y: -200, ease: "myBounce"});
// const logoSquash = gsap.to(logo, {duration: 2, scaleX: 1.4, scaleY: 0.6, ease: "myBounce-squash", transformOrigin: "center bottom"});
//
// t1.add(logoFlash)
// .add(logoFall)
// .add(logoSquash)


// ScrollTrigger.defaults({
//   lub: 0.1
// });
//
