var Film = {
	// Initialisation du film
	init: function (nom, annee, realisateur) {
		this.nom = nom;
		this.annee = annee;
		this.realisateur = realisateur;
	},
	decrire: function () {
		var description = this.nom + " (" + this.annee + ", " + this.realisateur + ")";
		return description;
	}
}

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheneau et Nicolas Benamou");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach( function(film) {
	console.log(film.decrire());
})