import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import EasePack from 'gsap/EasePack';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, EasePack, ScrollTrigger);

const container = document.querySelector('.footer');
const _sentenceEndExp = /(\.|\?|!)$/g;

const footer = document.querySelector('.footer__grid');

gsap.c

const machineGun = (text) => {
  let words = text.split(" ");
  let tl = gsap.timeline({delay:0.6, onComplete: () => {
      console.log('complete');
      gsap.to(footer, {display: 'grid', opacity: 1, duration: 1})
    }
  });
  let wordCount = words.length;
  let time = 0;
  let word, duration, isSentenceEnd;


  for(let i = 0; i < wordCount; i++) {
    word = words[i];
    isSentenceEnd = _sentenceEndExp.test(word);

    let element = document.createElement('h3');
    element.className = 'machineTitle';
    element.textContent = word;
    container.appendChild(element);
    duration = Math.max(0.5, word.length * 0.08);
    if (isSentenceEnd) {
      duration += 0.6;
    }

    gsap.set(element, {autoAlpha:0, scale:0, z:0.01});

    tl.to(element, {scale:1.2,  ease:"slow(0.25, 0.9)", duration}, time)
      .to(element, {autoAlpha:1, ease:"slow(0.25, 0.9, true)", duration}, time)
      .to(element, {opacity: 0})

    time += duration - 0.05;
    if (isSentenceEnd) {
      time += 0.6;
    }

  }
}

machineGun("СОЗДАЮ СЧАСТЛИВЫЙ ДИЗАЙН, ЗВОНИТЕ СЕЙЧАС!"),
ScrollTrigger.create({
  trigger: footer,
  markers: true,
  start: 'top center',
  end: 'top center',
  onEnter: () => console.log('onEnters'),
  onEnterBack: () => console.log('onEnterBack'),
  onLeave: () => console.log('onLeave'),
});
