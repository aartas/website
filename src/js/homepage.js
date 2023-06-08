


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
const app = gsap.timeline()

app.to('#appfeature1', {
  x: '-47vh',
  width: '28vh',
  height: '60vh',
  marginRight: 0,
  duration: 1,
  delay:1
})
app.to('#appheadline2', {
  zIndex: 2,
  duration: 1,

})

// app.to('#appfeature2', {
//   x: '-47vh',
//   width: '28vh',
//   height: '60vh',
//   marginRight: 0,
//   duration: 2,
// })


app.to('#appfeature2', {
  x: '-75vh',
  width: '28vh',
  height: '60vh',
  marginRight: 0,
  duration: 1,
})
app.to('#appheadline3', {
  zIndex: 4,
  duration: 1,
})

app.to('#appfeature3', {
  x: '-104vh',
  width: '28vh',
  height: '60vh',
  duration: 1,
})
app.to('#appheadline4', {
  zIndex: 6,
  duration: 1,
})
ScrollTrigger.create({
  animation: app,
  start: 'top top',
  end: 'bottom bottom',
  pin: '.aartasapp',
  trigger: '.aartasapp',
  toggleActions: 'restart restart none none'
})

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
//footer animation

gsap.to('.footeranimation', {
  yPercent: -100,
  duration: 1,
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh bottom  ',
    trigger: 'footer',
    pin: 'footer',
    toggleActions: 'play restart none none'
  }

})

gsap.to('.slide0', {
  height: 0,
  duration: 0.1,
  scrollTrigger: {
    start: 'top top',
    trigger: '.media'
  }
})