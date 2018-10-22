var userColor = prompt("Entrez la couleur du texte :");
var userBackgroundColor = prompt("Entrez la couleur du fond :");

var divElts = document.getElementsByTagName("div");
var i = 0;
for (i = 0; i < divElts.length; i++) {
    divElts[i].style.color = userColor;
    divElts[i].style.backgroundColor = userBackgroundColor;
}