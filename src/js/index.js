


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
    console.log(scrolled)
    if (scrolled > 0) {
        $('nav').addClass('scrolled');
        $('nav').removeClass('.dark')
    } else {
        $('nav').removeClass('scrolled');
    }
});



window.addEventListener('scroll', () => {
    $('.cartoon').css('width', `0px`)
    if (window.pageYOffset < 50 || window.pageYOffset == 0) {
        $('.banner1').css('height', `0px`)
        $('.banner1').css('width', `0px`)
    } else {
        $('.banner1').css('height', `${window.pageYOffset + 800}px`)
        $('.banner1').css('width', `${window.pageYOffset + 800}px`)
        $('.cartoon').css('width', `${window.pageYOffset - 1200}px`)
    }

});

