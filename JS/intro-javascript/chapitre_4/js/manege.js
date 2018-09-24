var tours_totaux = Number(prompt("Rentrez le nombre de tours que le manège fera :"))

while (!(Number.isInteger(tours_totaux))) {
	var tours_totaux = Number(prompt("Rentrez le nombre de tours que le manège fera :"))
}
for (var tour_manege=1; tour_manege <= tours_totaux; tour_manege++) {
		console.log("C'est le tour numéro " + tour_manege);
}