


gsap.registerPlugin(ScrollTrigger)
//hero section animation
gsap.to('.open1', {
  height: 0,
  duration: 2
})
gsap.to('.open2', {
  height: 0,
  duration: 2
})
// about animation

gsap.to('.card0', {
  height: 0,
  duration: 5,
  scrollTrigger: {
    pin: '.about',
    trigger: '.about',
    start: 'top top',
    end: '+=1000vh bottom',

    scrub: 2
  }
})
gsap.to('.card5', {
  height: '30vh',
  duration: 5,
  scrollTrigger: {
    pin: '.about',
    trigger: '.about',
    start: 'top top',
    end: '+=1000vh bottom',
    scrub: 3
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


//aartas app animation start
const app = gsap.timeline()
if (window.innerWidth <= 1440) {
  app.to('#appfeature1', {
    x: '-35vh',
    width: '28vh',
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
    delay: 0.2
  })
  app.to('#appheadline2', {
    zIndex: 2,
    duration: 0.5,

  })
  app.to('#appfeature2', {
    x: '-63vh',
    width: '28vh',
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
  })
  app.to('#appheadline3', {
    zIndex: 4,
    duration: 0.5,
  })

  app.to('#appfeature3', {
    x: '-91vh',
    width: '28vh',
    height: '60vh',
    duration: 0.5,
  })
  app.to('#appheadline4', {
    zIndex: 6,
    duration: 0.5,
  })
} else {
  app.to('#appfeature1', {
    x: '-47vh',
    width: '28vh',
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
    delay: 0.2
  })
  app.to('#appheadline2', {
    zIndex: 2,
    duration: 0.5,

  })

  app.to('#appfeature2', {
    x: '-75vh',
    width: '28vh',
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
  })
  app.to('#appheadline3', {
    zIndex: 4,
    duration: 0.5,
  })

  app.to('#appfeature3', {
    x: '-104vh',
    width: '28vh',
    height: '60vh',
    duration: 0.5,
  })
  app.to('#appheadline4', {
    zIndex: 6,
    duration: 0.5,
  })
}

ScrollTrigger.create({
  animation: app,
  start: 'top top',
  end: '+=2500vh bottom',
  pin: '.aartasapp',
  trigger: '.aartasapp',
  scrub: 2,
  toggleActions: 'restart restart reverse reverse'
})
//aartas app animation end


//-----------------------------aartas space start----------------------------------------------------
const tl = gsap.timeline();

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
  end: "+=5000vh bottom",
  scrub: 2,
})

ScrollTrigger.create({
  animation: tl,
  trigger: '.slide0',
  start: 'top top',
  end: "+=5000vh +=1500vh",
  scrub: 2,
  pin: '.slide0',
  pinSpacing: false

})
//aartas space end


//footer animation start
gsap.to('.footeranimation', {
  opacity: 2,
  duration: 3,
  scrollTrigger: {
    start: 'top top',
    end: 'bottom bottom  ',
    trigger: 'footer',
    pin: 'footer',
    toggleActions: 'play restart none none'
  }
})
//footer animation end


//aartas space corrections animation
gsap.to('.slide0', {
  height: 0,
  duration: 0.1,
  scrollTrigger: {
    start: 'top top',
    trigger: '.media'
  }
})
//aartas space corrections animation
