// window.addEventListener('resize', function () {


//     var divWidth = Math.min(window.innerHeight, window.innerWidth) * 0.04;

//         $('.heading1').css('height', `${divWidth}rem`)
//         $('.heading2').css('top', `-${divWidth}rem`)
// })
if (location.reload ==true){
    var scrollPosition = $(window).scrollTop();
    $(window).scrollTop(scrollPosition);
    window.pageYOffset =0;
}

window.addEventListener('scroll', function () {
    var divWidth = window.pageYOffset
    if (window.pageYOffset < 100) {
        $('.slide1').css('height', `60vh`)
        $('.divider').css('height', `0vh`)
        $('.slide2').css('height', `60vh`)
    }
    if (window.pageYOffset > 400) {
        $('.slide1').css('height', `50vh`)
        $('.divider').css('height', `10vh`)
        $('.hr').css('display', 'none')
        $('.slide2').css('height', `55vh`)
    }
    if (window.pageYOffset > 800) {
        $('.slide1').css('height', `40vh`)
        $('.divider').css('height', `30vh`)
        $('.slide2').css('height', `40vh`)
        $('.hr').css('display', 'block')
    }
    if (window.pageYOffset > 1200) {
        $('.slide1').css('height', `30vh`)
        $('.divider').css('height', `50vh`)
        $('.divider2').css('height', `0vh`)
        $('.slide2').css('height', `30vh`)
    }
    if (window.pageYOffset > 1600) {
        $('.slide1').css('height', `20vh`)
        $('.divider').css('height', `60vh`)
        $('.slide2').css('height', `40vh`)
    }
    if (window.pageYOffset > 2000) {
        $('.slide1').css('height', `20vh`)
        $('.divider').css('height', `70vh`)
        $('.divider2').css('height', `0vh`)
        $('.slide2').css('height', `50vh`)
    }
    if (window.pageYOffset > 2500) {
        $('.slide1').css('height', `15vh`)
        $('.divider').css('height', `80vh`)
        $('.divider2').css('height', `0vh`)
        $('.slide2').css('height', `60vh`)
    }
    if (window.pageYOffset > 3500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `0vh`)
        $('.slide2').css('height', `60vh`)
    }
    if (window.pageYOffset > 4500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `170vh`)
        $('.divider2').css('position', `absolute`)
        $('.divider2').css('bottom', `0`)
        $('.divider2').css('left', `0`)
        $('.divider2').css('right', `0`)
        $('.divider2').css('height', `30vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 5500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `160vh`)
        $('.divider2').css('height', `40vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 6500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `160vh`)
        $('.divider2').css('height', `70vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
    }
    if (window.pageYOffset > 7500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `120vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
    }
    if (window.pageYOffset > 8500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `140vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
    }
    if (window.pageYOffset > 9000) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `60vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 10000) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `90vh`)
        $('.divider4').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 10500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `120vh`)
        $('.divider4').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 11000) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `120vh`)
        $('.divider4').css('height', `40vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 11500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `120vh`)
        $('.divider4').css('height', `60vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 12000) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `120vh`)
        $('.divider4').css('height', `80vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 12500) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `120vh`)
        $('.divider4').css('height', `100vh`)
        $('.slide2').css('height', `0vh`)
    }
    if (window.pageYOffset > 13000) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `120vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `120vh`)
        $('.divider4').css('height', `120vh`)
        $('.slide2').css('height', `0vh`)
    }
    console.log(divWidth)

})
// else {

// }