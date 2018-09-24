var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
	rayon: r,
	perimetre: function() {
		perimetre = 2 * Math.PI * this.rayon;
		return perimetre;
	},
	aire: function(r) {
		aire = Math.PI * this.rayon * this.rayon;
		return aire;
	}
}

// TODO : ajoutez ici la définition de l'objet cercle

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());