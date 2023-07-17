var navbar = document.getElementById("navbar");
var video = document.getElementsByClassName('video');

function playVideo() {
  video.play();
}
video.onload = function () {
  playVideo();
}
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset + 200;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};

window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    $('.links').css('color', '#000')
    $('nav').css('background-color', '#fff')
    $('.logo_dark').css('display', 'block')
    $('.logo_white').css('display', 'none')
    $('.ham-menu').css('backgroundColor', '#fff')
    $('.routes').css('color', '#000')
    $('.icon').attr('src', 'images/hamburger_black.png')
  } else {
    $('.links').css('color', '#fff')
    $('nav').css('background-color', 'transparent')
    $('.logo_dark').css('display', 'none')
    $('.logo_white').css('display', 'block')
    $('.ham-menu').css('backgroundColor', '#00000012')
    $('.routes').css('color', '#fff')
    $('.icon').attr('src', 'images/hamburger.png')

  }
});




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
if (window.innerWidth <= 1024) {
  gsap.from('.aboutslot1', {
    xPercent: 100,
    duration: 5,
    scrollTrigger: {
      pin: '.cardtrigger',
      trigger: '.cardtrigger',
      start: '-600vh top',
      end: 'bottom top',
      toggleActions: 'play none none none',
      pinSpacing: false,
      scrub: true
    }
  })
  gsap.to('.aboutslot2', {
    xPercent: 100,
    duration: 5,
    scrollTrigger: {
      pin: '.cardtrigger',
      trigger: '.cardtrigger',
      start: '-600vh top',
      end: 'bottom top',
      toggleActions: 'play none none none',
      pinSpacing: false,
      scrub: true
    }
  })
}
if (window.innerWidth > 1024) {
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
if (window.innerWidth <= 577 && window.innerWidth > 200) {
  gsap.to('.scroller', {
    xPercent: -250,
    width: '100%',
    height: '100vh',
    duration: 12,
    scrollTrigger: {
      start: 'top top',
      end: '+=2500vh bottom',
      pin: '.specialities',
      scrub: 1,
      trigger: '.specialities',
      toggleActions: 'play none none none',
    }
  })

} else if (window.innerWidth <= 992 && window.innerWidth > 576) {
  gsap.to('.scroller', {
    xPercent: -140,
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
    x: -1500,
    width: '100%',
    height: '100vh',
    scrollTrigger: {
      start: 'top top',
      end: `+=2500vh bottom`,
      pin: true,
      scrub: 3,
      trigger: '.specialities',
      toggleActions: 'play none none none'
    }
  })

  // gsap.to('.scroll-thumb', {
  //   y: Heightthumb(),
  //   duration: 12,
  //   scrollTrigger: {
  //     start: 'top top',
  //     end: '+=2000vh',
  //     scrub: 1,
  //     trigger: '.scroller',
  //     toggleActions: 'play none none none'
  //   }
  // })
}
// specialities animation end


//aartas app animation start
const app = gsap.timeline()

if (window.innerWidth > 270 && window.innerWidth <= 576) {
  app.to('#appheadline1', {
    opacity: 0,
    duration: 0.1,
    delay: 0.5
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
    duration: 0,
  })
  app.to('#appfeature2', {
    left: '55%',
    right: 0,
    scale: 0.8,
    marginRight: 0,
    duration: 0.5,
  })
  app.to('#appfeature3', {
    left: '70%',
    right: 0,
    scale: 0.8,
    marginRight: 0,
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
    duration: 0,
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
    duration: 0,
  })

  app.to('#appfeature3', {
    left: '1%',
    right: 0,
    height: '60vh',
    duration: 0.5,
  })
  ScrollTrigger.create({
    animation: app,
    start: '150vh top',
    end: '+5000vh top',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
    toggleActions: 'restart restart reverse reverse'
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
  ScrollTrigger.create({
    animation: app,
    start: 'top top',
    end: '+5000vh top',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
    toggleActions: 'restart restart reverse reverse'
  })
}
if (window.innerWidth > 1024) {
  app.to('#appheadline1', {
    opacity: 0,
    duration: 0.1,
    delay: 0.5
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
    duration: 0.1,

  })
  app.to('#appfeature2', {
    left: '40%',
    right: 0,
    scale: 0.8,
    marginRight: 0,
    duration: 0.5,
  })
  app.to('#appfeature3', {
    left: '70%',
    right: 0,
    scale: 0.8,
    marginRight: 0,
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
    duration: 0.1,
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
    duration: 0.1,
  })

  app.to('#appfeature3', {
    left: '1%',
    right: 0,
    height: '60vh',
    duration: 0.5,
  })

  ScrollTrigger.create({
    animation: app,
    start: '100vh top',
    end: '+5000vh top',
    pin: '.aartasapp',
    trigger: '.aartasapp',
    scrub: 1,
    toggleActions: 'restart restart reverse reverse'
  })
}


//aartas app animation end


//-----------------------------aartas space start----------------------------------------------------
const tl = gsap.timeline();
if (window.innerWidth <= 992) {
  tl.to(".slide1", {
    height: "100vh",
    paddingLeft: '5vh',
    // paddingTop: '40vh',
    opacity: 1,
    duration: 5
  })
  tl.to('.slide2', {
    yPercent: -200,
    paddingLeft: '5vh',
    // paddingTop: '40vh',
    duration: 5
  })
  tl.to('.slide3', {
    yPercent: -350,
    paddingLeft: '5vh',
    // paddingTop: '40vh',
    duration: 5
  })
  tl.to('.slide4', {
    yPercent: -500,
    fontSize: '120%',
    paddingLeft: '5vh',
    // paddingTop: '40vh',
    duration: 5
  })

} else {
  tl.to(".slide1", {
    height: "100vh",
    paddingLeft: '20vh',
    // paddingTop: '25vh',
    opacity: 1,
    duration: 5

  })
  tl.to('.slide2', {
    yPercent: -200,
    paddingLeft: '20vh',
    // paddingTop: '25vh',
    duration: 5
  })
  tl.to('.slide3', {
    yPercent: -350,
    paddingLeft: '20vh',
    // paddingTop: '25vh',
    duration: 5
  })
  tl.to('.slide4', {
    yPercent: -500,
    paddingLeft: '20vh',
    // paddingTop: '25vh',
    duration: 5
  })

}
ScrollTrigger.create({
  animation: tl,
  trigger: '.slide0',
  start: 'top top',
  end: "+=4000vh bottom",
  scrub: 0.5,
  pin: '.slide0',
  pinSpacing: false,
})
ScrollTrigger.create({
  animaton: tl,
  trigger: '.slides',
  start: 'top top',
  pin: '.slides',
  end: "+=4000vh bottom",
  scrub: 0.5,
  // pinSpacing: false,
})

//------------------------------------aartas space end------------------------------------------------


//footer animation start
// gsap.to('.footeranimation', {
//   opacity: 2,
//   duration: 3,
//   scrollTrigger: {
//     start: 'top top',
//     end: 'bottom bottom  ',
//     trigger: 'footer',
//     pin: 'footer',
//     toggleActions: 'play none none none',
//   }
// })
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
    console.log(prevScrollPos)
    if (prevScrollPos > 100) {
      $('.ham-menu').height('0');
    }
  }
}
