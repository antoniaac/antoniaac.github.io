var skillsEL = document.getElementById("skills-list");

var skills = [];

var r1 = fetch("skills.json");
r1.then(function (raspuns) {
  var r2 = raspuns.json();

  r2.then(function (skills) {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  var skillsHTML = skills.map(function (skill) {
    // return "<li>" + skill.name + " - " + skill.endorcements + "</li>";
    return `<li>  ${skill.name}   - <span>${skill.endorcements}</span> </li>`;
  });

  skillsEL.innerHTML = skillsHTML.join("");
}

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
