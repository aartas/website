

var navbar = document.getElementById("navbar");
// var myDiv = $('.banner1');
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

// window.addEventListener('load', function () {
//     document.body.style.overflow = 'auto';
//     document.getElementById('content').style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';

// })

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



// window.addEventListener('scroll', () => {
//     $('.cartoon').css('width', `0px`)
//     if (window.pageYOffset < 50 || window.pageYOffset == 0) {
//         $('.banner1').css('height', `0px`)
//         $('.banner1').css('width', `0px`)
//     } else {
//         $('.banner1').css('height', `${window.pageYOffset + 800}px`)
//         $('.banner1').css('width', `${window.pageYOffset + 800}px`)
//         $('.cartoon').css('width', `${window.pageYOffset - 1200}px`)
//     }

// });

gsap.registerPlugin(ScrollTrigger)



const headline = gsap.timeline()

headline.from('.support', {
    height: '50vh',
    width: '100%',
    duration: 1
}).from('.animation_background', {
    scale: 0,
    height: '30vh',
    borderRadius: '90%',
    duration: 3
}).from('.banner1', {
    width: '100%',
    opacity: 1,
    duration: 3
})

// ScrollTrigger.create({
//     animation: headline,
//     markers: true,
//     pin: '.content',
//     trigger: '.content',
//     start: 'top top',
//     end: '+=2000vh',
//     scrub: 1,
//     pinSpacing: false,
//     duration: 1,
// })

ScrollTrigger.create({
    animation: headline,
    trigger: '.anim',
    start: 'top top',
    end: '+=2000vh bottom',
    scrub: 2,
    pin: '.content',

})
ScrollTrigger.create({
    animation: headline,
    trigger: '.anim',
    start: 'top top',
    end: '+=2000vh bottom',
    scrub: 2,
    pin: '.heading_animation',

})