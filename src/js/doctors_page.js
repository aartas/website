

// window.addEventListener('load', function () {
//     document.body.style.overflow = 'auto';
//     document.getElementById('content').style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';

// })

var navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";

  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};





gsap.registerPlugin(ScrollTrigger)



const headline = gsap.timeline()
headline.to('.animation_background', {
    scale: 1,
    duration: 2,
}).to('.animated-title', {
    scale: 0.5,
    duration: 0
}).to('.animation_background', {
    scale: 1.5,
    duration: 2,
}).to('.banner', {
    opacity: 1,
    duration: 0
}).to('.animation_background', {
    scale: 3,
    duration: 2,
}).to('.heading_animation', {
    width: '100%',
    duration: 2,
}).to('.animation_background', {
    scale: 5,
    duration: 2,
})
ScrollTrigger.create({
    animation: headline,
    pin: '.content',
    start: 'top top',
    end: '+=2000vh bottom',
    trigger: '.content',
    scrub: 1
})


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
            $('.ham-menu').height('0');
        }
    }
}
