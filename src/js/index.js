// Get the navbar
var navbar = document.getElementById("navbar");

// Get the initial position of the navbar
var navbarPosition = navbar.offsetTop;

// Function to hide the navbar on scroll
function hideNavbarOnScroll() {
    if (window.pageYOffset > navbarPosition) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
}

// Add event listener to window for scroll event
window.addEventListener("scroll", hideNavbarOnScroll);

window.addEventListener('load', function() {
    document.body.style.overflow = 'auto';
    document.getElementById('content').style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    
})