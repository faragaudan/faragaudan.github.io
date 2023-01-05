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


document.getElementById('Home').style.display = 'block';





