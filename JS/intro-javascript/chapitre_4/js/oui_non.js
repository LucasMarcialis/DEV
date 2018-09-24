
var saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
while ((saisie !== "non") && (saisie !== "oui")) {
	saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
}
console.log("Vous avez perdu !");