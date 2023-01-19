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

var pageIds = ["home", "skills", "languages", "projects", "rubik"];

// function hidePage(id) {
//     hide(id);
// }

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    console.info("inside pages.forEach", page.id);
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

displayPage("home");

// displayHome();
