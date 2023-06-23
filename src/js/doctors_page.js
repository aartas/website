

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

window.addEventListener("scroll", function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
        $('.links').css('color', '#000')
        $('nav').css('background-color', '#f2f2f2')
        $('.logo_dark').css('display', 'block')
        $('.logo_white').css('display', 'none')
    } else {
        $('.links').css('color', '#fff')
        $('nav').css('background-color', 'transparent')
        $('.logo_dark').css('display', 'none')
        $('.logo_white').css('display', 'block')
    }
});



gsap.registerPlugin(ScrollTrigger)



const headline = gsap.timeline()
headline.to('.animation_background', {
    scale: 1,
    duration: 2,
}).to('.animated-title', {
    scale: 0.5,
    duration: 0
}).to('.banner', {
    opacity: 1,
    duration: 0
}).to('.animation_background', {
    scale: 1.5,
    duration: 2,
}).to('.animation_background', {
    scale: 2,
    duration: 2,
}).to('.heading_animation', {
    width: '100%',
    duration: 2,
}).to('.animation_background', {
    scale: 3,
    duration: 2,
})
ScrollTrigger.create({
    animation: headline,
    pin: '.content',
    start: '50vh top',
    end: '+=2000vh bottom',
    trigger: '.heading_animation',
    scrub: 1
})
