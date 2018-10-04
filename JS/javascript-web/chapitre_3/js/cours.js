/* ---- MODIFIER UN ELEMENT EXISTANT ---- */

// LE CONTENU HTML
// Méthode : .innerHTML
// Modification du contenu HTML de la liste : ajout d'un nouveau langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';
// Suppression du contenu HTML de la liste
// document.getElementById("langages").innerHTML = "";

// LE CONTENU TEXTUEL
// Méthode : .textContent
// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// LES ATTRIBUTS
// Méthode : .setAttribute .id .href et .value
// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
// Les attributs id, href et value sont directement modifiables sous forme de propriétés, le code ci-dessous est équivalent au précédent
document.querySelector("h1").id = "titre";

// LES CLASSES
// Ajouter une classe > Methode : .remove
// Supprimer une classe > Méthode : .add
var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);


/* ---- AJOUTER UN NOUVEL ELEMENT ---- */

/*
1 création du nouvel élément > Methode : 
2 Définition des informations de l'élément (attributs et contenu textuel) > .id .href .value etc... et .textContent
3 Insertion du nouvel élément dans le DOM (à la fin du noeud) .appendChild
*/

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id ="python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément


/* ---- AJOUTER UN NOUVEL ELEMENT ---- */

// On peut aboutir au même résultat en ajoutant au nouvel élément un noeud fils de type texte grâce à createTextNode à la place de textContent

// CREATION D'UN NOEUD TEXTUEL
// Méthode : .appendChild
var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

// AJOUT D'UN NOEUD AVANT UN AUTRE NOEUD
// Méthode : insertBefore
var perlElt = document.createElement("li"); // Création d'un élement li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
//  Ajout du nouvel élément avant l'identifiant identifié par "php
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

// CHOIX DE LA POSITION EXACTE DU NOUVEAU NOEUD
/*
Méthode : .insertAdjacentHTML
beforebegin : avant l'élément existant lui-même
afterbegin : juste à l'intérieur de l'élément existant, avant son premier enfant
beforeend : juste à l'intérieur de l'élément existant, après son dernier enfant
afterend : après l'élément existant lui même

*/
// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');


/* ---- REMPLACER OU SUPPRIMER UN NOEUD ---- */

// REMPLACER UN NOEUD EXISTANT
// Méthode : .replaceChild
var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash" // Définition de son contenu textuel
// Remplacement de l'élément identifién par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

// SUPPPRIMER UN NOEUD EXISTANT
// Méthide : .removeChild
document.getElementById("langages").removeChild(document.getElementById("bash"));


/* ATTENTION A NE PAS TROP MANIPULER LE DOM, CELA RISQUE DE FAIRE RAMER LA PAGE */
// La création et la modification de nouveaux éléments avant leur insertion dans le DOM est également une bonne pratique qui permet de préserver au maximum les performances

document.getElementById("langages").insertAdjacentHTML("afterEnd", '<p>Et voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète.<p>');

var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("Et voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."))
document.getElementById("contenu").appendChild(pElt);


















