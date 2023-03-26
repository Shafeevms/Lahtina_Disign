import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {CustomEase} from 'gsap/CustomEase';
import {CustomBounce} from 'gsap/CustomBounce';


gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce);

const imgVictoria = document.querySelector('.about__img');
const logo = document.querySelector('.about__logo');


ScrollTrigger.create({
  // markers: true,
  start: 'top 70%',
  end: '70% 70%',
  trigger: '.about',
  onEnter: () => {
    gsap.to(imgVictoria, {opacity: 1, duration: 1.5});
  },
  onLeave: () => {
    gsap.to(imgVictoria, {opacity: 0, duration: 1});
    gsap.to(logo, {y: 0});
  },
  onEnterBack: () => {
    gsap.to(imgVictoria, {opacity: 1, duration: 1.5});
  },
  onLeaveBack: () => gsap.to(imgVictoria, {opacity: 0, duration: 0.5}),
});
