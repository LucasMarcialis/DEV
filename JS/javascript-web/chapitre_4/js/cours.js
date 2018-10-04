/* MODIFIER LE STYLE D'UN ELEMENT */


// LA PROPRIETE style

// A partir du moment où l'on a sélectionné un sélecteur, on peut lui ajouter n'importe quelle propriété CSS avec un .propriete
var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

// Pour certaines propriétés qui s'écrivent sous la forme d'un nom composé il faut supprimer le tiret et écrire la première lettre du mot suivant en majuscule
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";


/* ACCEDER AU STYLE D'UN ELEMENT */

// LES LIMITES DE LA PROPRIETE style

var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien
// La couleurs du troisième paragraphe n'apparaît pas car la propriété style utilisée en javascript représente l'attribut style de l'élément. Elle ne permet pas d'accéder aux déclaration de styles situées dans une feuille de CSS externe


// LA FONCTION getComputedStyle

// La solution pour accéder au style d'un élément consiste à utiliser une fonction nommée getComputedStyle. Elle prend en paramètre un noeud du DOM et renvoie un objet représentant son style. On peut ensuite consulter les différentes propriétés CSS de cet objet

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color) // Affiche la couleur bleue en valeurs RGB
// On trouve le computed style dans la console de débuggage