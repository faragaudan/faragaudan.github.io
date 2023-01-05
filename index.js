var skillsEl = document.getElementById("skills-list");


var skills = ["HTML", "CSS", "JS", "Drive"];


var skillsHTML = "";
var i = 0;


for (var i = 0; i < 4;) {
    skillsHTML += "<li>" + skilss[i] + "</li>";
    i++
}

console.info(skillsHTML);
skillsEl.innerHTML = skillsHTML;

//display "Home"

function hideAllPages() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("home").style.display = "none";
}



function dislpayHome() {
    hideAllPages();
    document.getElementById("home").style.display = "block";
}
function displaySkills() {
    console.warn("trebuie sa afisam skills page");
    hideAllPages();
    document.getElementById("skills").style.display = "block";
}
function displayLanguages() {
    hideAllPages();
    document.getElementById("languages").style.display = "block";
}

function displayProject() {
    hideAllPages();
    document.getElementById("project").style.display = "block";
}

displayHome();









