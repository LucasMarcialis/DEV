// Création de la liste des lettres affichées sur la page web
// Lorsque clic sur une lettre de la liste > Event # qui fait un appel à l'API pour la lettre choisie
// Récupération des définitions en format JSON
// Définition des éléments selon le DOM
// Insertion dans le DOM

var motsElt = document.getElementById("mots");

function afficherMots(lettre) {
	ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre, function (reponse) {
		var mots = JSON.parse(reponse);
		motsElt.innerHTML = "";
		if (mots.length > 0) {
			mots.forEach(function (mot) {
				var termElt = document.createElement("h3");
				termElt.textContent = mot.term;
				var definitionElt = document.createElement("p");
				definitionElt.textContent = mot.definition;
				motsElt.appendChild(termElt);
				motsElt.appendChild(definitionElt);
			});
		} else {
			var msgElt = document.createElement("p");
			msgElt.textContent = "Aucun mot trouvé pour " + lettre;
			motsElt.appendChild(msgElt);
		}
	});
}

var lettresElt = document.getElementById("lettres");

var lettres = ["A", "B", "C", "D", "E"];
lettres.forEach(function (lettre) {
	var lettreElt = document.createElement("a");
	lettreElt.textContent = lettre;
	lettreElt.href = "#";
	lettreElt.addEventListener("click", function() {
		afficherMots(lettre);
	});
	lettresElt.appendChild(lettreElt);
	lettresElt.appendChild(document.createTextNode(" | "));
})
lettresElt.appendChild(document.createTextNode("..."));