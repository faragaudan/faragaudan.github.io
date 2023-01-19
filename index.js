var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 3 },
  { name: "Drive", endorcements: 2 },
];

var skillsHTML = "";

var skillsHTML = skills.map(function (skill) {
  return "<li>" + skill.name + " - " + skill.endorcements + "</li>";
});

skillsEl.innerHTML = skillsHTML.join("");

var pageIds = ["home", "skills", "languages", "projects", "rubik"];

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

function initMenu() {
  console.warn("init meniu");

  document
    .getElementById("top-meniu-bar")
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
