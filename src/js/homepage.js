// window.addEventListener('resize', function () {


//     var divWidth = Math.min(window.innerHeight, window.innerWidth) * 0.04;

//         $('.heading1').css('height', `${divWidth}rem`)
//         $('.heading2').css('top', `-${divWidth}rem`)
// })
var divWidth = window.pageYOffset
console.log(divWidth);
window.addEventListener('scroll', function () {

    // console.log(window.innerWidth, window.innerHeight)
    var divWidth = window.pageYOffset
    if (window.pageYOffset>400){
        $('.slide1').css('height', `0px`)
        $('.divider').css('height', `${(window.pageYOffset+100)-(window.pageYOffset)}vh`)
        $('.hr').css('display','none')
        $('.slide2').css('height', `0px`)
    }else{
        $('.slide1').css('height', `60vh`)
        $('.slide2').css('height', `60vh`)
    }
    if(window.pageYOffset<700){
        $('.divider').css('height', `30vh`)
    }
    if (window.pageYOffset<500){
        $('.divider').css('height', `0vh`)
        $('.hr').css('display','block')
    }
    console.log(divWidth)
       
})