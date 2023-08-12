
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Text slide up js code

document.addEventListener("DOMContentLoaded", function () {
  const textArray = ["Aartas", "Gurgram", "Mumbai", "Delhi"]; 
  let currentTextIndex = 0;
  const slideText = document.getElementById("slide-text");

  function changeSlideText() {
    gsap.to(slideText, {
      y: -slideText.offsetHeight, // Slide up by the height of the element
      duration: 0.4, // Initial animation duration (in seconds)
      ease: "power4.out", // Easing function for smooth slide
      onComplete: function () {
        slideText.textContent = textArray[currentTextIndex];
        gsap.set(slideText, { y: slideText.offsetHeight }); // Reset the position for the next animation
        gsap.to(slideText, { y: 0, duration: 0.4, ease: "power4.out" }); // Slide up from the initial position
        currentTextIndex++;
        if (currentTextIndex >= textArray.length) {
          currentTextIndex = 0;
        }

        // Remove the class from all elements
        slideText.classList.remove("indented-text");
        // Add class based on index
        if (currentTextIndex === 0 || currentTextIndex === 1) {
          slideText.classList.add("indented-text");
        }
      },
    });
  }

  // Start the text sliding process after a brief delay to ensure the initial text is displayed
  setTimeout(() => {
    changeSlideText();
    // Start the interval after the initial animation is complete
    setInterval(changeSlideText, 1500); // Adjust the interval (milliseconds) for text change
  }, 100);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const textArray = ["Aartas", "Delhi", "Mumbai", "Gurgram"]; 
//   let currentTextIndex = 0;
//   const slideText = document.getElementById("slide-text");

//   function changeSlideText() {
//     gsap.to(slideText, {
//       y: -slideText.offsetHeight, // Slide up by the height of the element
//       duration: 0.4, // Initial animation duration (in seconds)
//       ease: "power4.out", // Easing function for smooth slide
//       onComplete: function () {
//         if (textArray[currentTextIndex] === "Aartas" || textArray[currentTextIndex] === "Delhi") {
//           gsap.to(slideText, { x: "3rem", duration: 0.3, ease: "power4.out" }); // Shift to the left by 1rem
//         }
        
//         slideText.textContent = textArray[currentTextIndex];
//         gsap.set(slideText, { y: slideText.offsetHeight, x: 0 }); // Reset the position for the next animation
//         gsap.to(slideText, { y: 0, duration: 0.4, ease: "power4.out" }); // Slide up from the initial position
//         currentTextIndex++;
//         if (currentTextIndex >= textArray.length) {
//           currentTextIndex = 0;
//         }
//       },
//     });
//   }

//   // Call the changeSlideText function initially and then at intervals
//   changeSlideText();
//   setInterval(changeSlideText, 3000); // Call every 3 seconds
// });


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// User Scroll For Navbar
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-68px"; // Change this value to adjust the height of the navigation bar
  }

  prevScrollPos = currentScrollPos;
};

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// scrollerbar for menu list

$("document").ready(function () {
  let sidebar = $(".scroll-menu");
  let sidebar_content = $(".scroll-menu .content-wrapper");

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let viewportHeight = $(this).height();
    let sidebarTop = scroll - menu.offset().top;
    let contentHeight = sidebar_content.height();
    if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
      sidebar_content.css(
        "transform",
        `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`
      );
      sidebar_content.css("position", "fixed");
    } else {
      sidebar_content.css("transform", "");
      sidebar_content.css("position", "");
    }
  });
});


// js code for navigation hamberger menu

const hamberger = document.querySelector(".hamberger");
const menu = document.querySelector(".menu");

hamberger.addEventListener("click", ()=> {
  hamberger.classList.toggle("active");
  menu.classList.toggle("active");
})

// section reveal on scroll

window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight ;
    var rvealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(rvealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }

  }
}

