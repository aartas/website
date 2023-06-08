

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

gsap.from('.support', {
    height: '50vh',
    duration: 3
})
gsap.from('.animation_background', {
    scale: 0,
    height: '0vh',
    borderRadius: '80%',
    duration: 3
})
gsap.from('.banner1', {
    width: '100%',
    opacity: 0,
    duration: 3
})
gsap.from('.content', {
    scale: 0.5,
    duration: 3

})

// const headline = gsap.timeline()

// headline.to('.animation_background', {
//     scale: 1,
//     height: '100vh',
//     borderRadius: '0%'
// })
// headline.to('.banner1', {
//     width: '100%',
//     opacity: 1
// })
// headline.to('.content', {
//     scale: 0,
//     height: '0',
//     width: 0,

// })

// ScrollTrigger.create({
//     markers: true,
//     animation: headline,
//     pin: '.heading_animation',
//     trigger: '.heading_animation',
//     start: 'top top',
//     end: '+=1000vh top ',
//     scrub: 1,
//     pinSpacing: false,
//     duration: 1,
// })
