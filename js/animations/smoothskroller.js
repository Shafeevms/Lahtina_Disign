import {gsap} from 'gsap';

import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const scroller = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
  wrapper: '.wrapper',
  content: '.content',
});
