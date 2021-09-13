// Section 1
const firstname = "margaux";
const lastname = "coppi";
let newp = document.createElement('p');
let firstsection = document.getElementById("firstsection");
newp.textContent = "Votre nom est " + lastname + " et votre prénom est " + firstname + ".";
firstsection.append(newp);

// Section 2
let div = document.getElementById("stylechanges");
div.addEventListener("click", function(){
   div.classList.add("divstylechange");
});

// section 3