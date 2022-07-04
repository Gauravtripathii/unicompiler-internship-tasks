var profile = document.querySelector(".profile");
var profileImg = profile.firstElementChild;
var profileTxt = profile.childNodes[3];

profile.addEventListener("mouseover", () => {
  profileImg.style.width = "0";
  profileImg.style.height = "0";
  profileTxt.style.fontSize = "60px";
});
profile.addEventListener("mouseout", () => {
  profileImg.style.width = "150px";
  profileImg.style.height = "150px";
  profileTxt.style.fontSize = "0";
});

var education = document.querySelector(".education");
var educationImg = education.firstElementChild;
var educationTxt = education.childNodes[3];

education.addEventListener("mouseover", () => {
  educationImg.style.width = "0";
  educationImg.style.height = "0";
  educationTxt.style.fontSize = "60px";
});
education.addEventListener("mouseout", () => {
  educationImg.style.width = "150px";
  educationImg.style.height = "150px";
  educationTxt.style.fontSize = "0";
});

var skills = document.querySelector(".skills");
var skillsImg = skills.firstElementChild;
var skillsTxt = skills.childNodes[3];

skills.addEventListener("mouseover", () => {
  skillsImg.style.width = "0";
  skillsImg.style.height = "0";
  skillsTxt.style.fontSize = "60px";
});
skills.addEventListener("mouseout", () => {
  skillsImg.style.width = "150px";
  skillsImg.style.height = "150px";
  skillsTxt.style.fontSize = "0";
});

var qualifications = document.querySelector(".qualifications");
var qualificationsImg = qualifications.firstElementChild;
var qualificationsTxt = qualifications.childNodes[3];

qualifications.addEventListener("mouseover", () => {
  qualificationsImg.style.width = "0";
  qualificationsImg.style.height = "0";
  qualificationsTxt.style.fontSize = "60px";
});
qualifications.addEventListener("mouseout", () => {
  qualificationsImg.style.width = "150px";
  qualificationsImg.style.height = "150px";
  qualificationsTxt.style.fontSize = "0";
});
