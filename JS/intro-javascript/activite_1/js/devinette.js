/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var guess = 0;
var tentative = 0;

while ((guess !== solution) && (tentative < 6)) {
	guess = Number(prompt("Veuillez saisir un nombre entre 1 et 100 pour trouver la solution : "));
	if (guess < solution) {
		console.log(guess + " est trop petit");
		tentative ++;
	} else if (guess > solution) {
		console.log(guess + " est trop grand");
		tentative ++;
	}
}
if (guess === solution) {
	console.log("Bravo ! La solution était " + solution);
	console.log("Vous avez deviné en " + tentative + " essai(s)");
} else {
	console.log("Perdu... la solution était " + solution);
}