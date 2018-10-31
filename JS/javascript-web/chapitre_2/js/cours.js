console.log(document.body.childNodes[5].childNodes[1]);

var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche le nombre de titres h2

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Élément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);
// Affiche 1

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu
console.log(document.querySelectorAll("#contenu p").length) // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length) // Affiche 8

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Renvoie le premier paragraphe
console.log(document.querySelector("p"));

/*
1. Plusieurs éléments à obtenir
    - Sélection par balise > getElementsByTagNAme
    - Sélection par classe > getElementsByClassName
    - Autre que par balise ou classe > querySelectorAll
2. Un seul élément à obtenir
    - Sélection par identifiant > getElementById
3. Un seul élément (le premier) à obtenir
    - Sélection autre que par identifiant > querySelector 
*/

// Renvoie contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

// Renvoie le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du pramier lien
console.log(document.querySelector("a").href);

if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length);
console.log(classes[0]);

// Tester la présenced'une classe dans un élément en appelant la méthode contains sur la liste des classes
if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("l'élément identifié par antiques ne possède pas la classe merveille");
    } else {
        console.log("L'élément identifié par antiques ne possède pas la classe merveille");
    }