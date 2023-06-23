


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
if (window.innerWidth < 1024) {
  gsap.from('.aboutslot1', {
    xPercent: 100,
    duration: 5,
    scrollTrigger: {
      pin: '.cardtrigger',
      trigger: '.cardtrigger',
      start: '-100vh top',
      end: 'bottom bottom',
      pinSpacing: false,
      scrub: 2
    }
  })
  gsap.to('.aboutslot2', {
    xPercent: 100,
    duration: 5,
    scrollTrigger: {
      pin: '.cardtrigger',
      trigger: '.cardtrigger',
      start: '-100vh top',
      end: 'bottom bottom',
      pinSpacing: false,
      scrub: 2
    }
  })
}
if (window.innerWidth >= 1024) {
  gsap.to('.card0', {
    height: 0,
    duration: 5,
    scrollTrigger: {
      pin: '.about',
      trigger: '.about',
      start: 'top top',
      end: '+=500vh bottom',
      scrub: 2,
      pinSpacing: false,
    }
  })

}

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
      toggleActions: 'play none none none',
    }
  })

  gsap.to('.scroll-thumb', {
    y: Heightthumb(),
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

if (window.innerWidth > 300 && window.innerWidth <= 576) {
  app.to('#appheadline1', {
    opacity: 0,
    duration: 0.1,
  })
  app.to('#appfeature1', {
    left: '1%',
    right: 0,
    scale: 1,
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
    delay: 0.2
  })
  app.to('#appheadline2', {
    opacity: 1,
    duration: 0.5,
  })
  app.to('#appfeature2', {
    left: '1%',
    right: 0,
    scale: 1,
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
  })
  app.to('#appheadline3', {
    opacity: 1,
    duration: 0.5,
  })
  app.to('#appfeature3', {
    left: '1%',
    scale: 1,
    right: 0,
    height: '60vh',
    duration: 0.5,
  })
  app.to('#appheadline4', {
    opacity: 1,
    duration: 0.5,
  })

  app.to('#appfeature3', {
    left: '1%',
    right: 0,
    height: '60vh',
    duration: 0.5,
  })
}
if (window.innerWidth > 576 && window.innerWidth <= 1024) {
  app.to('#appfeature4_tab', {
    opacity: 1,
    duration: 0.3,
  })
  app.to('#appheadline1', {
    opacity: 0,
    duration: 0.1,
  })
  app.to('#appfeature4_tab', {
    opacity: 0,
    duration: 0.3,
  })
  app.to('#appfeature1_tab', {
    opacity: 0.5,
    duration: 0.3,
  })
  app.to('#appheadline2', {
    opacity: 1,
    duration: 0.1,
  })
  app.to('#appfeature1_tab', {
    opacity: 1,
    duration: 0.3,
  })
  app.to('#appfeature1_tab', {
    opacity: 1,
    duration: 0.5,
  })
  app.to('#appheadline2', {
    opacity: 0.5,
    duration: 0.1,
  })
  app.to('#appfeature1_tab', {
    opacity: 0,
    duration: 0.3,
  })
  app.to('#appfeature2_tab', {
    opacity: 0.5,
    duration: 0.3,
  })
  app.to('#appheadline2', {
    opacity: 0,
    duration: 0.1,
  })
  app.to('#appfeature2_tab', {
    opacity: 1,
    duration: 0.3,
  })
  app.to('#appfeature2_tab', {
    opacity: 1,
    duration: 0.3,
  })
  app.to('#appheadline3', {
    opacity: 1,
    duration: 0.1,
  })
  app.to('#appfeature2_tab', {
    opacity: 0.5,
    duration: 0.3,
  })
  app.to('#appfeature3_tab', {
    opacity: 0.5,
    duration: 0.3,
  })
  app.to('#appfeature2_tab', {
    opacity: 0,
    duration: 0.3,
  })
  app.to('#appheadline3', {
    opacity: 0,
    duration: 0.1,
  })
  app.to('#appfeature3_tab', {
    opacity: 1,
    duration: 0.3,
  })
  app.to('#appheadline4', {
    opacity: 0.5,
    duration: 0.1,
  })
  app.to('#appfeature3_tab', {
    opacity: 1,
    duration: 0.3,
  })
  app.to('#appheadline4', {
    opacity: 1,
    duration: 0.1,
  })
  app.to('#appheadline4', {
    opacity: 1,
    duration: 0.1,
  })
  app.to('#appheadline4', {
    opacity: 1,
    duration: 0.1,
  })
}
if (window.innerWidth > 1024) {
  app.to('#appheadline1', {
    opacity: 0,
    duration: 0.1,
  })
  app.to('#appfeature1', {
    left: '1%',
    right: 0,
    scale: 1,
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
    delay: 0.2
  })
  app.to('#appheadline2', {
    opacity: 1,
    duration: 0.5,

  })
  app.to('#appfeature2', {
    left: '1%',
    right: 0,
    scale: 1,
    height: '60vh',
    marginRight: 0,
    duration: 0.5,
  })
  app.to('#appheadline3', {
    opacity: 1,
    duration: 0.5,
  })
  app.to('#appfeature3', {
    left: '1%',
    scale: 1,
    right: 0,
    height: '60vh',
    duration: 0.5,
  })
  app.to('#appheadline4', {
    opacity: 1,
    duration: 0.5,
  })

  app.to('#appfeature3', {
    left: '1%',
    right: 0,
    height: '60vh',
    duration: 0.5,
  })

}

ScrollTrigger.create({
  animation: app,
  start: 'top top',
  end: '+5000vh top',
  pin: '.aartasapp',
  trigger: '.aartasapp',
  scrub: 1,
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
//------------------------------------aartas space end------------------------------------------------


//footer animation start
gsap.to('.footeranimation', {
  opacity: 2,
  duration: 3,
  scrollTrigger: {
    start: 'top top',
    end: 'bottom bottom  ',
    trigger: 'footer',
    pin: 'footer',
    toggleActions: 'play none none none',
  }
})
//footer animation end


function showmenu() {

  let height = $('.ham-menu').height()
  if (height == 0) {
    $('.ham-menu').height('max-content');
  }
  if (height != 0) {
    $('.ham-menu').height('0');
  }
  window.onscroll = function () {
    let prevScrollPos = window.pageYOffset;
    if (prevScrollPos > 10) {
      console.log('offset');
      $('.ham-menu').height('0');
    }
  }
}
