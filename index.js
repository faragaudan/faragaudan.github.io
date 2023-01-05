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



function dislpayHome() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function displaySkills() {
    console.warn("trebuie sa afisam skills page");
    document.getElementById("home").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("skills").style.display = "block";
}
function displayLanguages() {
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("languages").style.display = "block";
}

function displayProject() {
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("project").style.display = "block";
}

displayHome();









