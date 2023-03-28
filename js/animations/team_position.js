import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const svg1 = gsap.timeline({repeat: -1, yoyo: true, ease: 'power4.out'});
const svg2 = gsap.timeline({repeat: -1, yoyo: true, ease: 'power3.out'});

svg1
  .to('.step11', {morphSVG: '.step12', duration: 1.2})
  .to('.step11', {morphSVG: '.step13', duration: 1.4}, '>')
  .to('.step11', {morphSVG: '.step14', duration: 1}, '>')
  .to('.step11', {morphSVG: '.step15', duration: 1.4});

svg2
  .to('.step21', {morphSVG: '.step25', duration: 1.4, delay: 4})
  .to('.step21', {morphSVG: '.step23', duration: 1}, '>')
  .to('.step21', {morphSVG: '.step22', duration: 1.3})
  .to('.step21', {morphSVG: '.step24', duration: 1.3}, '>')
  .to('.step21', {morphSVG: '.step25', duration: 1.4, delay: 4, scale: 0.9, ease: 'Sine.easeIn'})
  .to('.step21', {morphSVG: '.step23', duration: 1}, '>')
  .to('.step21', {morphSVG: '.step22', duration: 1.3})
  .to('.step21', {morphSVG: '.step24', duration: 1.3}, '>');

const title = document.querySelector('.team__title');
const leader = document.querySelector('.leader');


ScrollTrigger.create({
  trigger: '.team',
  // markers: true,
  start: 'top 80%',
  end: 'center center',
  onEnter: () => {
    gsap.to(title, {
      duration: 1.5,
      y: '10vh',
    });
    moveEl('.team__item_1', '20vw');
    moveEl('.team__item_2', '15vw');
    moveEl('.team__item_3', '-20vw');
    moveEl('.team__item_4', '-15vw');
    moveEl('.team__item_5', '-20vw');
    moveEl(leader, '0', '-20vh');
  }
});


const moveEl = (el, x = '0', y = '0') => {
  gsap.fromTo(el, {
      opacity: 0,
    },
    {
      duration: 1.5,
      opacity: 1,
      x,
      y
    });
};

gsap.to('.service', {
  backgroundColor: '#262525',
  scrollTrigger: {
    trigger: '.service',
    markers: true,
    start: 'top 80%',
    end: 'center center',
  }
})
