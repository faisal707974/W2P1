$(document).ready(function() {
    const hamburger = document.querySelector(".hamburger");
    const navdiv = document.querySelector(".navdiv");

    hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navdiv.classList.toggle("active");

        })

})

