nombre = Number(prompt("Saisisez un nombre"));

while (!((nombre >= 50) && (nombre <=100))) {
	nombre = Number(prompt("Saisisez un nombre"));
}
console.log("Vous avez trouvé un nombre entre 50 et 100");