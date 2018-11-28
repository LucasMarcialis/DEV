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

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffiusante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});


// Validation à la fin de la saisie

/*
La fin de FOCUS d'un champ déclenche l'évènement de type BLUR que l'on peut exploiter pour contrôler la donnée saisie.

Si l'on souhaite vérifier la présence du cara tère @ dans le courriel
indexOF permet de chercher une valeur dans une chaîne de caractères et renvoie la valeur -1 si cette valeur n'est pas trouvée.
*/

// Contrôle du courrierl en fin de saisie

document.getElementById("courriel").addEventListener("blur", function (e) {
    var validiteCourriel = "";
    if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisie ne contient pas le caractère @
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});


// LAS EXPRESSIONES REGULIERES

var regex = /@/; // La chaîne doit contenir le caractère @
console.log(regex.test("")); // Affiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sopgie&mil.fr")); // Affiche false
console.log(regex.test("sophie@mail.fr")); // Affiche true

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});
