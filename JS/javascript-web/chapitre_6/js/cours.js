// LES ZONES DE TEXTE

// >> Accéder à la valeur saisie <<
// En JS on accède à la valeur saisie en utilisant la propriété VALUE de l'élément du DOM
// Le formulaire est alors pré-rempli avec la valeur VALUE

var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

var mdpElt = document.getElementById("mdp");
mdpElt.value = "MonMotDePasse"

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

// Boutons radio

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
	aboElts[i].addEventListener("change", function(e) {
		console.log("Formule d'abonnement choisie : " + e.target.value);
	});
};

// Listes déroulantes

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function(e) {
	console.log("Code de nationalité : " + e.target.value);
});



// LE FORMULAIRE COMME ELEMENT DO DOM

// Accès aux champs du formulaire
/* 
La balise <form> corresponds à un élément du DOM
Cet élément possède une propriété ELEMENTS rassemblant les champs de saisie du formulaire.
On accède à ces champs via leur noms (attribut NAME) ou à partir de son indice (ordre d'apparition dans le formulaire)
*/
var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"
console.log(form.elements.abonnement.value); // Affiche "aborien"
console.log(form.elements.nationalite.value); // Affiche "FR"

// Soumission du formulaire

/*
En règle générale, la soumission d'un formulaire se traduit par l'envoi de ses données à la ressource identifiée par l'attribut action de la balise  <form>. Mais avant cela, un événement de type submit est déclenché sur l'élément du DOM correspondant au formulaire. En ajoutant un gestionnaire pour ce type d'événement, on peut accéder aux données du formulaire avant leur envoi. On peut même annuler l'envoi ultérieur des données en appelant la méthode preventDefault sur l'objet Event associé à l'événement.
*/

// Affichage de toutes les données saisies ou choisies
form.addEventListener("submit", function(e) {
	var pseudo = form.elements.pseudo.value;
	var mdp = form.elements.mdp.value;
	var courriel = form.elements.mdp.valie
	console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel);
});