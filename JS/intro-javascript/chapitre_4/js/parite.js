var nombre_parite = Number(prompt("Rentrez le nombre limite de parité"));

for (var i = 1; i <= nombre_parite; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }
    else {
    	console.log (i + " est impair");
    }
}