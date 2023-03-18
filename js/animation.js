import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce);

const t1 = gsap.timeline();


const imgVictoria = document.querySelector('.about__img');
const logo = document.querySelector('.hero__logo');

gsap.set(imgVictoria, { opacity: 0 });
gsap.set(logo, { opacity: 0 })

ScrollTrigger.defaults({
  lub: 0.1
});

ScrollTrigger.create({
  markers: true,
  start: 'top center',
  end: '+=1000',
  scrub: true,
  trigger: imgVictoria,
  onEnter: (self) => gsap.to(imgVictoria, { opacity: 1,   duration: 2, ease: 'power2.out', }),
  onLeave: () => gsap.to(imgVictoria, { opacity: 0,  duration: 1, ease: 'power2.out' }),
  onUpdate: (self) => gsap.to(imgVictoria, {ease: 'power2.out', y: self.progress * 500 })
});

const logoFlash = gsap.fromTo(
  logo,
  { opacity: 1 },
  { opacity: 0, duration: 0.4, repeat: 2, yoyo: true }
);

const bgTimeline = gsap.timeline({
  ease: "power2.out",
  paused: true,
});

bgTimeline.to(".about", { backgroundColor: "black", duration: 4 });
// bgTimeline.to(imgVictoria, { opacity: 1, duration: .1, })

ScrollTrigger.create({
  // markers: true,
  trigger: ".about",
  start: "top center",
  end: "bottom bottom",
  scrub: true,
  // pin: imgVictoria,
  onUpdate: (self) => {
    const progress = +self.progress.toFixed(2);
    bgTimeline.progress(progress);
    // gsap.to(imgVictoria, {ease: 'power2.out', y: self.progress * 50, opacity: 1, duration: 2 })
  },
});

// CustomBounce.create("myBounce", {strength: 0.6, squash: 3, squashID: "myBounce-squash"});
// const logoFall = gsap.from(logo, {duration: 2, y: -200, ease: "myBounce"});
// const logoSquash = gsap.to(logo, {duration: 2, scaleX: 1.4, scaleY: 0.6, ease: "myBounce-squash", transformOrigin: "center bottom"});

t1.add(logoFlash)
// .add(logoFall)
// .add(logoSquash)
