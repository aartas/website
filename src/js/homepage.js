


gsap.registerPlugin(ScrollTrigger)

// about animation
gsap.to('.card0', {
  height: 0,
  duration: 10,
  scrollTrigger: {
    pin: '.aboutinfo',
    trigger: '.aboutinfo',
    start: 'top top',
    end: '+=1000vh bottom',
    scrub: 4
  }
})

// specialities animation
gsap.to('.scroller', {
  xPercent: -110,
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


//aartas app animation
gsap.to('#appfeature1', {
  x: '-40vh',
  width: '28vh',
  height: '60vh',
  marginRight: 0,
  duration: 10,
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 2,
    delay: 2
  }
})
gsap.to('#appheadline2', {
  zIndex: 2,
  duration: 1,
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})

gsap.to('#appfeature2', {
  x: '-67vh',
  width: '28vh',
  height: '60vh',
  marginRight: 0,
  duration: 10,
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 2,
    delay: 2
  }
})

gsap.to('#appheadline3', {
  zIndex: 4,
  duration: 1,
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,

  }
})

gsap.to('#appfeature3', {
  x: '-96vh',
  width: '28vh',
  height: '60vh',
  duration: 10,
  scrollTrigger: {
    start: 'top top',
    end: '+=200vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 2,
    delay: 2
  }
})
gsap.to('#appheadline4', {
  zIndex: 6,
  duration: 1,
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})



const tl = gsap.timeline();
// t1.to('.slide0', {
//   height: '1vh',
//   duration: 2,
//   delay: 3
// })
tl.to(".slide1", {
  height: "100vh",
  paddingLeft: '20vh',
  paddingTop: '25vh',
  opacity: 1,
  duration: 5

})
tl.to('.slide2', {
  yPercent: -200,
  paddingLeft: '20vh',
  paddingTop: '25vh',
  duration: 5
})
tl.to('.slide3', {
  yPercent: -350,
  paddingLeft: '20vh',
  paddingTop: '25vh',
  duration: 5
})
tl.to('.slide4', {
  yPercent: -500,
  paddingLeft: '20vh',
  paddingTop: '25vh',
  duration: 5
})

ScrollTrigger.create({
  animaton: tl,
  trigger: '.slides',
  start: 'top top',
  pin: '.slides',
  markers: true,
  scrub: 1,
})
ScrollTrigger.create({
  animation: tl,
  markers: true,
  trigger: '.slide0',
  start: 'top top',
  end: "+=2000vh bottom",
  scrub: 2,
  pin: '.slide0',
  pinSpacing: false

})
