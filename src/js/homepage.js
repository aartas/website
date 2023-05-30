// window.addEventListener('resize', function () {


//     var divWidth = Math.min(window.innerHeight, window.innerWidth) * 0.04;

//         $('.heading1').css('height', `${divWidth}rem`)
//         $('.heading2').css('top', `-${divWidth}rem`)
// })

window.addEventListener('scroll', function () {


    var divWidth = window.pageYOffset
    if (window.pageYOffset < 300) {
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
    if (window.pageYOffset > 500) {
        $('.slide1').css('height', `40vh`)
        $('.divider').css('height', `30vh`)
        $('.slide2').css('height', `40vh`)
        $('.hr').css('display', 'block')
    }
    if (window.pageYOffset > 600) {
        $('.slide1').css('height', `30vh`)
        $('.divider').css('height', `50vh`)
        $('.slide2').css('height', `30vh`)
    }
    if (window.pageYOffset > 700) {
        $('.slide1').css('height', `20vh`)
        $('.divider').css('height', `60vh`)
        $('.slide2').css('height', `40vh`)
    }
    if (window.pageYOffset > 800) {
        $('.slide1').css('height', `20vh`)
        $('.divider').css('height', `70vh`)
        $('.slide2').css('height', `50vh`)
    }
    if (window.pageYOffset > 900) {
        $('.slide1').css('height', `15vh`)
        $('.divider').css('height', `80vh`)
        $('.slide2').css('height', `60vh`)
    }
    if (window.pageYOffset > 1000) {
        $('.slide1').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.slide2').css('height', `60vh`)
    }
    console.log(divWidth)

})
// else {

// }