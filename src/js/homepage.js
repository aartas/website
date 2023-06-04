
// gsap.registerPlugin(ScrollTrigger)
// gsap.defaults({
//   markers: true,
//   ease: 'in-ease',
//   duration: 1
// })
// const tl = gsap.timeline();
// tl.fromTo(".slide1", {
//   height: 0,
//   opacity: 0.8
// }, {
//   height: "100vh",
//   paddingLeft: '20vh',
//   paddingTop: '35vh',
//   opacity: 1
// })
// .from('.slide2', { yPercent: 170,duration:5 })
//   .from('.slide3', { yPercent: 170,duration:5 })
//   .from('.slide4', { yPercent: 170,duration:5 })


// ScrollTrigger.create({
//   animation: tl,
//   markers: true,
//   trigger: '.slides',
//   start: '-300vh top',
//   end: " top",
//   scrub: 2,
//   pin: '.slides',
//   pinSpacing: false,

// })


// const t1 = gsap.timeline()
// t1.to('.slide0a', {
//   yPercent: -100,
//   duration: 1
// }).to('.slide0b', {
//   yPercent: 10,
//   duration: 1
// })

// gsap.to('.slide1', {
//   height: '100vh',
//   yPercent: -50,
//   duration: 1
// })

gsap.to('.scroller', {
  xPercent: -100,
  width: '100%',
  height: '100vh',
  duration: 12,
  scrollTrigger: {
    start: 'top top',
    end: '+=2500vh bottom',
    pin: true,
    scrub: 1,
    trigger: '.specialities',
    toggleActions: 'play none none none'
  }
})

gsap.to('.scroll-thumb', {
  y: '80vh',
  duration: 12,
  scrollTrigger: {
    start: 'top top',
    end: '+=2000vh',
    scrub: 1,
    trigger: '.scroller',
    toggleActions: 'play none none none'
  }
})

const t2 = gsap.timeline()
t2.to('#appfeature1', {
  xPercent: -140,
  duration: 5,
  height: '60vh',
  width: '28vh',
  delay: 1,
}).to('#appheadline1', {
  opacity: 0,
}).to('#appheadline2', {
  duration: 10,
  opacity: 1,
  duration: 2,
}).to('#appfeature2', {
  xPercent: -278,
  duration: 10,
  height: '60vh',
  width: '28vh',
}).to('#appheadline2', {
  opacity: 0
}).to('#appheadline3', {
  opacity: 1,
  duration: 2
}).to('#appfeature3', {
  xPercent: -350,
  duration: 1,
  height: '50vh',
  width: '20vh',
  duration: 10,
}).to('#appheadline3', {
  opacity: 0,
}).to('#appheadline4', {
  opacity: 1,
  duration: 2,
}).to('#appfeature3', {
  xPercent: -450,
  height: '61vh',
  width: '29vh',
  duration: 5,
})
ScrollTrigger.create({
  animation: t2,
  start: '-100vh top',
  markers: true,
  end: '+=12000vh',
  pin: '.aartasapp',
  pinSpacing: false,
  scrub: 1,
  trigger: '.phone',
  toggleActions: 'play none none none'

})


