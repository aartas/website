var navbar = document.getElementById("navbar");
var myDiv = $('.banner1');
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
// window.addEventListener('scroll', AnimateDiv)
// function AnimateDiv() {
//     var pageHeight = window.innerHeight
//     var Scroll = window.pageYOffset
//     var resultHeight = pageHeight + Scroll
//     console.log(pageHeight, Scroll)
//     if(resultHeight >pageHeight){
//         $('.banner1').css("height", (resultHeight, window.pageYOffset)+``)
//         $('.banner1').css("width", (resultHeight, window.pageYOffset))
//         $('.banner1').css("left", ((pageHeight - Scroll)))
//         $('.banner1').css("top", (pageHeight - Scroll))
//         $('.banner1').css('background-color','#000')
//     }


// }

// var expandDiv = document.querySelector('.banner1');
// var initialHeight = 0; 
// var scrollRange = 500; 
// var maxExpand = 150; 
// var initialWidth = 0;
// window.addEventListener('scroll', function () {
//     var scrollPosition = window.scrollY;
//     var expandAmount = Math.min(scrollPosition / scrollRange * maxExpand, maxExpand);
//     var newHeight = initialHeight + expandAmount;
//     var newWidth = initialWidth + expandAmount;
//     expandDiv.style.height = newHeight + 'rem';
//     expandDiv.style.width = newWidth + 'rem';
//     expandDiv.css('background-color', '#000')

// });

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        myDiv.addClass('scrolled');
    }
    if (window.pageYOffset < 100) {
        myDiv.removeClass('scrolled');
    }
    if (window.pageYOffset > 150) {
        myDiv.css('top', '50%')
            ('.scrolled').css('height', '100vh')
    }
});
