var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";
var i = 0;

for (var i = 0; i < 4; ) {
  skillsHTML += "<li>" + skills[i] + "</li>";
  i++;
}

console.info(skillsHTML);

skillsEl.innerHTML = skillsHTML;

//display "Home"

function hideAllPages() {
  hide("skills");
  hide("languages");
  hide("projects");
  hide("home");
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayHome() {
  hideAllPages();
  show("home");
}
function displaySkills() {
  console.warn("trebuie sa afisam skills page");
  hideAllPages();
  show("skills");
}
function displayLanguages() {
  hideAllPages();
  show("languages");
}

function displayProjects() {
  hideAllPages();
  show("projects");
}

displayHome();
