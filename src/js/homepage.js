// (A) LOCK SCREEN ORIENTATION
function lock(orientation) {
  // (A1) GO INTO FULL SCREEN FIRST
  let de = document.documentElement;
  if (de.requestFullscreen) { de.requestFullscreen(); }
  else if (de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
  else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
  else if (de.msRequestFullscreen) { de.msRequestFullscreen(); }

  // (A2) THEN LOCK ORIENTATION
  screen.orientation.lock(orientation);
}


gsap.registerPlugin(ScrollTrigger)
//hero section animation start
gsap.to('.open1', {
  height: 0,
  duration: 2
})
gsap.to('.open2', {
  height: 0,
  duration: 2
})
//hero section animation end

// about animation start

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
gsap.to('.shortcard', {
  width: 0,
  duration: 5,
  scrollTrigger: {
    pin: '.about_mobile',
    trigger: '.about_mobile',
    start: 'top top',
    end: '+=1000vh bottom',
    pinSpacing: false,
    scrub: 2
  }
})
gsap.to('.longcard', {
  width: 0,
  duration: 5,
  scrollTrigger: {
    pin: '.about_mobile',
    trigger: '.about_mobile',
    start: 'top top',
    end: '+=1000vh bottom',
    pinSpacing: false,
    scrub: 3
  }
})
// about animation end


function Heightthumb() {
  let specialityHeight = $('.specialities').height()
  specialityHeight = specialityHeight
  $('.scroll-line').height(specialityHeight)
  return specialityHeight
}

window.addEventListener('resize', Heightthumb);

// specialities animation start
if (window.innerWidth <= 992) {
  gsap.to('.scroller', {
    xPercent: -170,
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
      end: '+=2500vh',
      scrub: 1,
      trigger: '.scroller',
      toggleActions: 'play none none none'
    }
  })
} else {
  gsap.to('.scroller', {
    x: -500,
    width: '100%',
    height: '100vh',
    scrollTrigger: {
      start: 'top top',
      end: `+=2500vh bottom`,
      pin: true,
      scrub: 1,
      trigger: '.specialities',
      toggleActions: 'play none none none'
    }
  })

  gsap.to('.scroll-thumb', {
    y: Heightthumb(),
    duration: 12,
    scrollTrigger: {
      start: 'top top',
      end: '+=2000vh',
      scrub: 1,
      trigger: '.scroller',
      toggleActions: 'play none none none'
    }
  })
}
// specialities animation end


//aartas app animation start
const app = gsap.timeline()
if (window.innerWidth <= 1024) {
  app.to('#appfeature1_mobile', {
    zIndex: -1,
    duration: 0.5,
  })
  app.to('#appheadline2', {
    zIndex: 2,
    duration: 0.5,

  })
  app.to('#appfeature2_mobile', {
    zIndex: -1,
    duration: 0.5,
  })
  app.to('#appheadline3', {
    zIndex: 4,
    duration: 0.5,
  })

  app.to('#appfeature3_mobile', {
    zIndex: -1,
    duration: 0.5,
  })
  app.to('#appheadline4', {
    zIndex: 6,
    duration: 0.5,
  })
}
if (window.innerWidth > 1024) {
  app.to('#appfeature1', {
    position: 'absolute',
    left: 0,
    right: 0,
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
    position: 'absolute',
    left: 0,
    right: 0,
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
    position: 'absolute',
    left: 0,
    right: 0,
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
  end: '+3000vh bottom',
  pin: '.aartasapp',
  trigger: '.aartasapp',
  scrub: 2,
  toggleActions: 'restart restart reverse reverse'
})
//aartas app animation end


//-----------------------------aartas space start----------------------------------------------------
const tl = gsap.timeline();
if (window.innerWidth <= 992) {
  tl.to('.slide0', {
    opacity: 0.5,
    duration: 5
  }).to('.slide0', {
    opacity: 0.2,
    duration: 5
  }).to('.slide0', {
    opacity: 0,
    duration: 5
  }).to(".slide1", {
    height: "100vh",
    paddingLeft: '5vh',
    paddingTop: '10vh',
    opacity: 1,
    duration: 5
  })
  tl.to('.slide2', {
    yPercent: -200,
    paddingLeft: '5vh',
    paddingTop: '10vh',
    duration: 5
  })
  tl.to('.slide3', {
    yPercent: -350,
    paddingLeft: '5vh',
    paddingTop: '10vh',
    duration: 5
  })
  tl.to('.slide4', {
    yPercent: -500,
    fontSize: '120%',
    paddingLeft: '5vh',
    paddingTop: '10vh',
    duration: 5
  })
} else {
  tl.to('.slide0', {
    opacity: 0.5,
    duration: 3
  }).to('.slide0', {
    opacity: 0.2,
    duration: 3
  }).to(".slide1", {
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
}
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


