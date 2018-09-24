var mot = "";
var mots = [];
while ( mot !== "stop") {
	mot = prompt("Trouver le mot pour faire arrêter le jeu");
	if (mot !== "stop") {
		mots.push(mot);
	}
	mot = mot.toLowerCase();
}
console.log ("Bravo vous avez trouvé le bon mot STOP, voici la liste de tous les mots que vous avez rentré");
mots.forEach(function (mot) {
	console.log(mot);
});