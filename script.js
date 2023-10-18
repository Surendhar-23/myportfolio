let displaypercent = function (element, value) {
  let counter = 0;
  return function () {
    if (counter == value) {
      clearInterval(intervalId);
    } else {
      counter += 1;
      element.innerHTML = counter + "%";
    }
  };
};

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
