import {gsap} from 'gsap';

const line1 = document.querySelector('.line__1');
const line2 = document.querySelector('.line__2');
const line3 = document.querySelector('.line__3');
const line4 = document.querySelector('.line__4');

const mm = gsap.matchMedia();

mm.add('(min-width: 540px)', () => {
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

  tlTitleWrapper
    .to(line1, {height: '100%'})
    .to(line2, {width: '100%'})
    .to(line3, {height: '100%'})
    .to(line4, {width: '100%'});
});
