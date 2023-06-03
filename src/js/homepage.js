
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
  opacity: 1
}).from('.slide2', { yPercent: 150 })
  .from('.slide3', { yPercent: 150 })
  .from('.slide4', { yPercent: 150 })


ScrollTrigger.create({
  animation: tl,
  markers: true,
  trigger: '.slides',
  start: 'top top',
  end: "100vh",
  scrub: 2,
  pin: '.slides',
  pinSpacing: false,
  anticipatePin: 1,

})
gsap.to('.scroller',{
  xPercent:-60,
  duration:12,
  scrollTrigger:{
    markers:true,
    start:'top top',
    end:'+=2000vh',
    pin:true,
    scrub:1,
    trigger:'.specialities',
    toggleActions:'play restart reverse none'
  }
})

gsap.to('.scroll-thumb',{
  y:'85vh',
  duration:12,
  scrollTrigger:{
    markers:true,
    start:'top top',
    end:'+=2000vh',
    pin:true,
    scrub:1,
    trigger:'.scroller',
    toggleActions:'play restart reverse none'
  }
})



