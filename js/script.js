window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-dark-scrolled");
    } else {
        navbar.classList.remove("navbar-dark-scrolled");
    }
});
