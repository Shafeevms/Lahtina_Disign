import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const svg1 = gsap.timeline({ repeat: -1, yoyo: true, ease: "power4.out" });
const svg2 = gsap.timeline({ repeat: -1, yoyo: true, ease: "power3.out" });

svg1
  .to('.step11', { morphSVG: '.step12', duration: 1.2 })
  .to('.step11', { morphSVG: '.step13', duration: 1.4 }, '>')
  .to('.step11', { morphSVG: '.step14', duration: 1 }, '>')
  .to('.step11', { morphSVG: '.step15', duration: 1.4 });

svg2
  .to('.step21', { morphSVG: '.step25', duration: 1.4, delay: 4 })
  .to('.step21', { morphSVG: '.step23', duration: 1 }, '>')
  .to('.step21', { morphSVG: '.step22', duration: 1.3 })
  .to('.step21', { morphSVG: '.step24', duration: 1.3 }, '>')
  .to('.step21', { morphSVG: '.step25', duration: 1.4, delay: 4, scale: 0.9, ease: 'Sine.easeIn' })
  .to('.step21', { morphSVG: '.step23', duration: 1 }, '>')
  .to('.step21', { morphSVG: '.step22', duration: 1.3 })
  .to('.step21', { morphSVG: '.step24', duration: 1.3 }, '>')
// const title = document.querySelector('.team__title');
// const leader = document.querySelector('.leader');


//
// const tlTeam = gsap.timeline({
//   ease: 'Sine.easeIn',
//   scrollTrigger: {
//     markers: true,
//     trigger: '.team',
//     start: 'top 80%',
//     end: 'top -15%',
//     toggleActions: 'play reverse play reverse'
//   }
// });
//
// tlTeam
//   .to(title, {
//     duration: 1,
//     // y: '30vh',
//     yPercent: 50,
//   })
//   .to(title, {
//     duration: 0.4,
//     opacity: 0
//   })
//   .to(leader, {
//     duration: 2,
//     // x: '40vw',
//     // y: '-30vh',
//     yPercent: 50,
//     xPercent: 50,
//     scaleX: 1.5,
//     scaleY: 1.5,
//   })
