
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({
  markers: true,
  ease: 'in-ease',
  duration: 1
})
const tl = gsap.timeline();
tl.fromTo(".slide1", {
  height: 0,
  opacity: 0.8
}, {
  height: "100vh",
  paddingLeft: '20vh',
  paddingTop: '35vh',
  duration: 0.5,
  opacity: 1
}).from('.slide2', { yPercent: 150 })
  .from('.slide3', { yPercent: 150 })
  .from('.slide4', { yPercent: 150 })
  .from('.slide5', { yPercent: 150})

ScrollTrigger.create({
  animation: tl,
  markers: true,
  trigger: '.slides',
  start: 'top top',
  end: "+=2600%",
  scrub: 1,
  pin: true,
  pinSpacing: false,
  anticipatePin: 1,

})






