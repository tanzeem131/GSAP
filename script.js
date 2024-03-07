import { gsap } from "gsap";

var tl = gsap.timeline();

tl.from(".nav img, .nav h3, .nav h4, .nav button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#main h1", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
});
tl.from("#main > img", {
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

tl.from("#main h5", {
  opacity: 0,
  scale: 0,
  y: 100,
});

tl.to("#main h5", {
  y: 20,
  repeat: -1,
  yoyo: true,
});
