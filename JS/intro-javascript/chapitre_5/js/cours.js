function direBonjour() {
	console.log("Bonjour");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");


function direBonjour() {
	return "Bonjour";
}

console.log("Début du programme");
var resultat = direBonjour();
console.log(resultat);
console.log("Fin du programme");


function direBonjour() {
	var message = "Bonjour";
	return message;
}

console.log(direBonjour());
// console.log(message); // message est une variable locale


function direBonjour(prenom) {
	var message = "Bonjour, " + prenom + " !";
	return message;
}
console.log(direBonjour("Lucas"));
console.log(direBonjour("Caroline"));

function presentation(prenom, age) {
	console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans");
}
presentation("Lucas", 24);
presentation("Caroline", 24);

console.log(Math.min(4.5, 5));
console.log(Math.min(19, 9));
console.log(Math.min(1,1));

console.log(Math.random());