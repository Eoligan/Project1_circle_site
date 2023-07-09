const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("data-toggle-icon", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("data-toggle-icon", false);
  }
});

//Disable animation while screen is resizing
let resizeTimeout;

window.onresize = function () {
  document.body.classList.add("disable-animation");
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    document.body.classList.remove("disable-animation");
  }, 100);
};
