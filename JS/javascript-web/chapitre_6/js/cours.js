// LES ZONES DE TEXTE

// >> Accéder à la valeur saisie <<
// En JS on accède à la valeur saisie en utilisant la propriété VALUE de l'élément du DOM

var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

// >> Gestion du focus <<
// Le clic de l'utilisateur sur une zone de saisie d'un formulaire déclenche l'apparition d'un évènement FOCUS
// Le changement de cible de saisie provoque l'épparition d'un évènement de type BLUR sur l'ancienne zone qui avait le FOCUS

// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = "";
});

// Focus sur la zone de saisie du pseudo
pseudoElt.focus();


// LES ÉLÉMENTS D'OPTIONS

// Cases à cocher

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});