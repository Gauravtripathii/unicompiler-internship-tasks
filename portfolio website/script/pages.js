var homeBtn = document.querySelector(".home-btn");
var home = document.querySelector(".home");

var aboutBtn = document.querySelector(".about-btn");
var about = document.querySelector(".about");

aboutBtn.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "flex";
});

homeBtn.addEventListener("click", () => {
    about.style.display = "none";
    home.style.display = "flex";
});