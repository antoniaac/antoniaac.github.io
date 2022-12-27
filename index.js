var skillsEL = document.getElementById("skills-list");
// skillsEL.style.color = "red";
// skillsEL.style.fontSize = "25px";

// document.getElementById("skills-list").style.display = none;

// var oldText = skillsEL.innerHTML;
// skillsEL.innerHTML = oldText + "<li>JS</li>";

// skillsEL.innerHTML = skillsEL.innerHTML + "<li>JS</li>";

// // skillsEL.innerHTML += '<li class="favorite">HTML</li>';
// skillsEL.innerHTML += '<li class="favorite">CSS</li>';
// skillsEL.innerHTML += "<li>JS</li>";

var skills = ["HTML", "CSS", "JS"];

// skillsEL.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEL.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEL.innerHTML += "<li>" + skills[2] + "</li>";

var skillsHTML = "";
var i = 0;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;

for (var i = 0; i < skills.length; ) {
  skillsHTML += "<li>" + skills[i] + "</li>";
  i++;
}
skillsEL.innerHTML = skillsHTML;
