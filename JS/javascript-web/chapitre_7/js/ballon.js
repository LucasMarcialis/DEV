var ballonElt = document.getElementById("ballon"); 
var cadreElt = document.getElementById("cadre");
var demarrerElt = document.getElementById("demarrer");
var arreterElt = document.getElementById("arreter");
var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null;
var vitesse = 7;
var direction = 1;
var xMin = 0; 


function animerBallon() {
    var xBallon = parseFloat(getComputedStyle(ballonElt).left);
    var xMax = parseFloat(getComputedStyle(cadreElt).width);
    if ((xBallon + largeurBallon > xMax ) || (xBallon < xMin)) {
        direction *= -1;
    }
    ballonElt.style.left = (xBallon + vitesse * direction) + "px";
    animationId = requestAnimationFrame(animerBallon);
};

demarrerElt.addEventListener("click", function () {
    demarrerElt.disabled = true;
    arreterElt.disabled = false;
    requestAnimationFrame(animerBallon);
});

arreterElt.addEventListener("click", function () {
    demarrerElt.disabled = false;
    arreterElt.disabled = true;
    cancelAnimationFrame(animationId);
});