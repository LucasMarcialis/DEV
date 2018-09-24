var valeur = [11, 3, 7, 2, 9, 10];
var max = valeur[0];
for(i=1; i < valeur.length; i++) {
	if (valeur[i] > max) {
		max = valeur[i];
	}
}
console.log("Le plus grand nombre de ces éléments vaut " + max);