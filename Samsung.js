$(document).ready(function() {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerlist = document.querySelector(".hamburgerlist");

    hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            hamburgerlist.classList.toggle("active");

        })

})

