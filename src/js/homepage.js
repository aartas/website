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
        $('.slide2').css('height', `60vh`)
        $('.divider').css('height', `0vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 400) {
        $('.slide1').css('height', `55vh`)
        $('.slide2').css('height', `55vh`)
        $('.divider').css('height', `10vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 500) {
        $('.slide1').css('height', `50vh`)
        $('.slide2').css('height', `50vh`)
        $('.divider').css('height', `20vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 600) {
        $('.slide1').css('height', `45vh`)
        $('.slide2').css('height', `45vh`)
        $('.divider').css('height', `25vh`)
        $('.divider2').css('height', `0vh`)

    }
    if (window.pageYOffset > 800) {
        $('.slide1').css('height', `40vh`)
        $('.slide2').css('height', `40vh`)
        $('.divider').css('height', `30vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 1000) {
        $('.slide1').css('height', `35vh`)
        $('.slide2').css('height', `35vh`)
        $('.divider').css('height', `35vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 1200) {
        $('.slide1').css('height', `30vh`)
        $('.slide2').css('height', `30vh`)
        $('.divider').css('height', `40vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 1300) {
        $('.slide1').css('height', `25vh`)
        $('.slide2').css('height', `25vh`)
        $('.divider').css('height', `45vh`)
        $('.divider2').css('height', `0vh`)
    }
    if (window.pageYOffset > 1400) {
        $('.slide1').css('height', `20vh`)
        $('.slide2').css('height', `20vh`)
        $('.divider').css('height', `50vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 1600) {
        $('.slide1').css('height', `15vh`)
        $('.slide2').css('height', `15vh`)
        $('.divider').css('height', `60vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 1800) {
        $('.slide1').css('height', `15vh`)
        $('.slide2').css('height', `15vh`)
        $('.divider').css('height', `60vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 2000) {
        $('.slide1').css('height', `20vh`)
        $('.slide2').css('height', `20vh`)
        $('.divider').css('height', `70vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 2100) {
        $('.slide1').css('height', `15vh`)
        $('.slide2').css('height', `15vh`)
        $('.divider').css('height', `75vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
    }
    if (window.pageYOffset > 2200) {
        $('.slide1').css('height', `10vh`)
        $('.slide2').css('height', `10vh`)
        $('.divider').css('height', `70vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 2200) {
        $('.slide1').css('height', `5vh`)
        $('.slide2').css('height', `5vh`)
        $('.divider').css('height', `80vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
    }
    if (window.pageYOffset > 2300) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
    }
    if (window.pageYOffset > 2400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `0vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 4000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `10vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 4200) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `20vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset >4400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `30vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 4600) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `40vh`)        
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 4800) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `50vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 5000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `60vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 5200) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `70vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 5400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `80vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 5600) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `90vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 5800) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 6000 && window.pageYOffset < 7000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `0vh`)
        $('.divider4').css('height', `0vh`)
    }
        if (window.pageYOffset > 7000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `10vh`)
        $('.divider4').css('height', `0vh`)
    }        
    if (window.pageYOffset > 7200) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `20vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 7400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `30vh`)
        $('.divider4').css('height', `0vh`)
    } 
    if (window.pageYOffset > 7600) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `40vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 7800) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `60vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 8000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `70vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 8200) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `80vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 8400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `90vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 8600 && window.pageYOffset < 9600) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `0vh`)
    }
    if (window.pageYOffset > 9600) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `10vh`)
    }
    if (window.pageYOffset > 9800) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `20vh`)
    }
    if (window.pageYOffset > 10000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `30vh`)
    }
    if (window.pageYOffset > 10200) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `40vh`)
    }
    if (window.pageYOffset > 10400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `50vh`)
    }
    if (window.pageYOffset > 10600) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `60vh`)
    }
    if (window.pageYOffset > 10800) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `70vh`)
    }
    if (window.pageYOffset > 11000) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `80vh`)
    }
    if (window.pageYOffset > 11200) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `90vh`)
    }
    if (window.pageYOffset > 11400) {
        $('.slide1').css('height', `0vh`)
        $('.slide2').css('height', `0vh`)
        $('.divider').css('height', `100vh`)
        $('.divider2').css('height', `100vh`)
        $('.divider3').css('height', `100vh`)
        $('.divider4').css('height', `100vh`)
    }

    console.log(divWidth)

})
// else {

// }