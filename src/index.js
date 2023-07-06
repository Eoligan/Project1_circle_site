const MAIN_PROJECT = "simplify";

const learnMoreLinks = document.querySelectorAll(".learn-more-link");
const mainProjectLink = document.querySelectorAll("#main-project");

//Event that listens which article was clicked to open dynamically
//later in project page

learnMoreLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const linkID = link.id;

    localStorage.setItem("selectedLinkID", linkID);

    window.location.href = "/project.html";
  });
});

//Event that listens click on Projects link (primary or secondary)
//and go to main-project at that moment (now: simplify)

mainProjectLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.setItem("selectedLinkID", MAIN_PROJECT);

    window.location.href = "/project.html";
  });
});
