var nombre = Number(prompt("Rentrez un nombre"));
if ((nombre >= 0) && (nombre <= 100)) {
	console.log(nombre + " est compris entre 0 et 100");
}
else if (nombre >100) {
	console.log(nombre + " est supérieur à 100");
}
else {
	console.log(nombre + " est négatif");
}

console.log(true && true); // affiche true
console.log(true && false); // affiche false
console.log(false && true); // affiche false
console.log(false && false); // affiche false