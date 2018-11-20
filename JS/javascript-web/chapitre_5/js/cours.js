// On définit une fonction nommée clic qui ajoute une ligne dans la console

function clic() {
    console.log("Clic !");
}

// Récupération de l'élément bouton du DOM
var boutonElt = document.getElementById("bouton");

// Ajout d'un gestionnaire pour l'évènement click
boutonElt.addEventListener("click", clic);

// La méthode addEventListener ajoute un gestionnaire pour un évènement particulier. Cette méthode prend deux paramètres : le type de l'évènement et la fonction qui gère l'évènement.Cette fonction sera appelée à chaque fois que l'évènement se déclenchera sur l'élément.

// Il est possible d'utiliser une synthaxe un peu plus concise en définissant la fonction au moment de l'appel :

boutonElt.addEventListener("click", function() {
    console.log("Clic bis !");
})

// LA GRANDE FAMILLE DES ÉVÈNEMENTS

/*
Évènement clavier > appui ou relachement d'une touche du clavier

- Évènement souris > clic avec les différents boutons, appui ou relâchement d'un bouton de la sourics, survol d'une zone avec la souris

- Évènements fenêtre > Chargement ou fermeture de la page, redimensionnement, défilement (scrolling)

- Évènements formulaire > Changement de cible de saisie (focus), envoi d'un formulaire

Chaque type d'évènement créé un objet Event qui peut être utilisé par la fonction qui gère l'évènement. Cet objet dispose de propriétés qui fournissent des informations sur l'évènement, et de méthodes qui permettent d'agir sur celui-ci.

TYPE renvoie le type d'évènement et TARGET l'élément du DOM auquel l'évènement est destiné

*/

// Ajout d'un gestionnaire qui affiche le type et la cible de l'évènement
document.getElementById("bouton").addEventListener("click", function(e) {
    console.log("Evènement : " + e.type + ", texte de la cible : " + e.target.textContent);
})


// GESTION DES ÉVÈNEMENTS LES PLUS COURANTS

// KEYPRESS réagi à l'appui sur une touche du clavier
// La méthode String.fromCharCode permet de treduire cette valeur en une chaîne représentant le caractère

// Gestion de l'appui sur une touche du clavier touchant un caractère
document.addEventListener("keypress", function(e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
})

// Affiche des informations sur un évènement clavier
function infosClavier(e) {
    console.log("Évènement clavier : " + e.type + ", touche : " + e.keyCode);
}

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

// Evènement clavier : L'ordre de déclenchement des évènements est keydown > keypress > keyup

// Evènement souris : L'ordre de déclenchement des évènements est

// clientX/Y indique où l'utilisateur est posititionné en fonction de sa fenêtre de navigateur (scroll)
// pageX/Y indique où l'utilisateur est positionné en fonction de sa page totale

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton de droite
        bouton = "droit";
        break;
    }
    return bouton;
}

document.addEventListener("")
