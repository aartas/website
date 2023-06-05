
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


gsap.to('.card0', {
  height:0,
  duration: 10,
  scrollTrigger: {
    pin: '.aboutinfo',
    trigger: '.aboutinfo',
    start: 'top top',
    end: '+=1000vh bottom',
    scrub: 4
  }
})


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

gsap.to('#appheadline1', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})
gsap.to('#appfeature1', {
  x: '-40vh',
  width: '28vh',
  height: '60vh',
  duration: 10,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 2,
  }
})
gsap.to('#appheadline2', {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})

gsap.to('#appfeature2', {
  x: '-77vh',
  width: '28vh',
  height: '60vh',
  duration: 10,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 2,
  }
})

gsap.to('#appheadline2', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})
gsap.to('#appheadline3', {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})


gsap.to('#appfeature3', {
  x: '-115vh',
  width: '28vh',
  height: '60vh',
  duration: 10,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 2,
  }
})
gsap.to('#appheadline3', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})
gsap.to('#appheadline4', {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    start: 'top,top',
    end: '+=100vh',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
  }
})


const animation1 = gsap.timeline();
animation1.from('.element1', { opacity: 0, y: -50, duration: 1 });


const animation2 = gsap.timeline();
animation2.from('.element2', { opacity: 0, x: 50, duration: 1 });


const masterTimeline = gsap.timeline();



ScrollTrigger.create({
  trigger: '.trigger-element',
  start: 'top center',
  end: 'bottom center',
  animation: masterTimeline, 
});
