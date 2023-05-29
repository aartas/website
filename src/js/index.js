


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

window.addEventListener('load', function () {
    document.body.style.overflow = 'auto';
    document.getElementById('content').style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';

})

// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         myDiv.addClass('scrolled');
//     }
//     if (window.pageYOffset < 100) {
//         myDiv.removeClass('scrolled');
//     }
//     if (window.pageYOffset > 150) {
//         myDiv.css('top', '50%')
//         ('.scrolled').css('height', '100vh')
//     }
// });
// window.pageYOffset/2



window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset < 50 || window.pageYOffset == 0) {
        $('.banner1').css('height', `0px`)
        $('.banner1').css('width', `0px`)
    } else {
        $('.banner1').css('height', `${window.pageYOffset + 800}px`)
        $('.banner1').css('width', `${window.pageYOffset + 800}px`)
        $('.cartoon').css('width', `${window.pageYOffset - 800}px`)
    }

});

window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // User has scrolled to the end of the page
        // Perform actions or trigger events here
        console.log('end')
    }
});
//   background-color:#fff;