"use strict";
// preloader
window.onload = function () {
  document.querySelector(".preloader").style.display = "none";
};

// Skills
let moreskills = document.querySelector(".moreskills");
let skillboxes = [...document.querySelectorAll(".skillbox")];
let skillssize = 0;
for (let i = 0; i < skillboxes.length; i++) {
  let computedStyle = window.getComputedStyle(skillboxes[i]);
  if (computedStyle.getPropertyValue("display") == "block") {
    skillssize++;
  }
}
moreskills.addEventListener("click", () => {
  for (let i = skillssize; i < skillssize + 3; i++) {
    if (skillboxes.length <= i) break;
    skillboxes[i].style.display = "block";
  }
  skillssize += 3;
  if (skillboxes.length <= skillssize) moreskills.style.display = "none";
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

sr.reveal(
  ".hero-section,.about-section,.skill-section,.education-section,.project-section,.contact-section,.footer",
  {}
);
sr.reveal("nav-link", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".main-content .main-img", { interval: 200 });
