function direBonjour(prenom, nom) {
	var prenom = prompt("Rentrez votre prénom");
	var nom = prompt("Rentrez votre nom");
	var message = "Bonjour, " + prenom + " " + nom + " !";
	return message;
}
console.log(direBonjour());