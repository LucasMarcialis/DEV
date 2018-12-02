var compteurElt = document.getElementById("compteur");
var boutonElt = document.querySelector("button");
var intervalId = null;
var demarre = false; // Etat du chronomètre : démarré (true ou arrêté (false))

// Augmenter le compteur
function augmenterCompteur () {
    compteurElt.textContent = Number(compteurElt.textContent) + 1;
};

boutonElt.addEventListener("click", function() {
    if (!demarre) {
        // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        intervalId = setInterval(augmenterCompteur, 1000);
        boutonElt.textContent = "Arrêter"; // Modifie le texte du bouton
    } else {
        clearInterval(intervalId); // Arrête le chronomètre
        boutonElt.textContent = "Démarrer"; // Modifie le texte du bouton
    }
    // Inverse la valeur de l'état du chronomètre
    demarre = !demarre;
});

/*
1) Clic sur démarrer = 
- Début du compteur
- Changement du text content du bouton à Arrêter
*/