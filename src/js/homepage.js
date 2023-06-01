
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({
  markers: true,
  ease: 'in-ease',
  duration: 1
})
const tl = gsap.timeline();
tl.fromTo(".slide1", {
  height: 0,
  fontSize: 50
}, {
  height: "100vh",
  paddingLeft: '20vh',
  paddingTop: '35vh',
  duration: 1,
  fontSize: 120
}).from('.slide2', { yPercent: 150 })
  .from('.slide3', { yPercent: 150 })
  .from('.slide4', { yPercent: 150 });

ScrollTrigger.create({
  animation: tl,
  markers: true,
  trigger: '.slides',
  start: '00% 0%',
  end: '+=30000rem',
  scrub: 1,
  pin: true,
  pinSpacing: false,
  anticipatePin: 1
})






