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

var experience = document.querySelector(".experience");
var experienceImg = experience.firstElementChild;
var experienceTxt = experience.childNodes[3];

experience.addEventListener("mouseover", () => {
  experienceImg.style.width = "0";
  experienceImg.style.height = "0";
  experienceTxt.style.fontSize = "60px";
});
experience.addEventListener("mouseout", () => {
  experienceImg.style.width = "150px";
  experienceImg.style.height = "150px";
  experienceTxt.style.fontSize = "0";
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

// FOR VIEW BOXES

// profile view
var profileViewBox = document.querySelector(".view-profile");
var closeProfile = document.querySelector(".back-profile");

profile.addEventListener("click", () => {
  profileViewBox.style.display = "flex";
});
closeProfile.addEventListener("click", () => {
  profileViewBox.style.display = "none";
});

// experience view
var experienceViewBox = document.querySelector(".view-experience");
var closeExperience = experienceViewBox.childNodes[1];

experience.addEventListener("click", () => {
  experienceViewBox.style.display = "flex";
});
closeExperience.addEventListener("click", () => {
  experienceViewBox.style.display = "none";
});
