var skillsEL = document.getElementById("skills-list");

var skills = [
  { nume: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 3 },
  { name: "Drive", endorcements: 2 },
];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML +=
    "<li>" + skills[i].name + " - " + skills[i].endorcements + "</li>";
}
skillsEL.innerHTML = skillsHTML;

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  console.warn("init menu");

  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        // var id = e.target.getAttribute("data-page");
        var id = e.target.dataset.page;
        displayPage(id);
      }
    });
}

displayPage("skills");
initMenu();
