var project1 = document.querySelector(".project1");
var project1Title = project1.childNodes[3];

project1.addEventListener("mouseover", () => {
    project1Title.style.fontSize = "37px";
    project1Title.style.width = "100%";
    project1Title.style.height = "100%";
});
project1.addEventListener("mouseout", () => {
    project1Title.style.fontSize = "0";
    project1Title.style.width = "0";
    project1Title.style.height = "0";
});