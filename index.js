var skillsEl = document.getElementById("skills-list");
//skillsEl.style.color = "red";
//skillsEl.style.fontSize = "25px";

//document.getElementById("skills-list").style.display

//skillsEl.innerHTML = <li>JS</li>; 

//var oldText = skillsEl.innerHTML
//skillsEl.innerHTML = oldText + "<li>JS</li>";

//skillsEl.innerHTML += "<li>JS</li>;

//skillsEl.innerHTML += '<li class="favorite">HTML</li>'
//skillsEl.innerHTML += '<li class="favorite">CSS</li>'
//skillsEl.innerHTML += "<li>JS</li>";

var skills = ["HTML", "CSS", "JS"];

// skillsEl.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[2] + "</li>";

var skillsHTML = "";
var i = 0;

// skillsHTML += "<li>" + skilss [0] + "</li>";
// i++
// skillsHTML += "<li>" + skilss [1] + "</li>";
// i++
// skillsHTML += "<li>" + skilss [2] + "</li>";
// i++

for (var i = 0; i < 4;) {
    skillsHTML += "<li>" + skilss[i] + "</li>";
    i++
}

console.info(skillsHTML);
skillsEl.innerHTML = skillsHTML;





