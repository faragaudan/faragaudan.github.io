const r1 = fetch("skills.json");
r1.then((raspuns) => {
  const r2 = raspuns.json();
  r2.then((skills) => {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map((skill) => {
    return `<li>${skill.name} - <span>${skill.endorcements}</span></li>`;
  });

  const skillsEl = document.getElementById("skills-list");

  skillsEl.innerHTML = skillsHTML.join("");
}

var pageIds = ["home", "skills", "languages", "projects", "rubik"];

function hideAllPages() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
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

  document.getElementById("top-meniu-bar").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      // var id = e.target.getAttribute("data-page");
      const id = e.target.dataset.page;

      displayPage(id);
    }
  });
}

displayPage("skills");
initMenu();

const f1 = function () {
  return "arrow";
};

const f2 = () => {
  return "arrow";
};
