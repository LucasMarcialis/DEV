// Voici un tableau de 3 films
var films = ["Le loup de Wall street", "Vice-Versa", "Babysittimg"];

// Dans un tableau on peut rentrer des valkeurs de différents types :
var tab = ["Bonjour", 7, true];

console.log(films.length); // Affiche 3

var tableauVide = []; // Création d'un tableau vide

console.log(tableauVide.length);

console.log(films[0]);
console.log(films[1]);
console.log(films[2]);

for(i=0;i<films.length;i++) {
	console.log(films[i]);
}

// forEach permet d'appliquer une fonction sur chaque élément du tableau
films.forEach(function (films) {
	console.log(films);
});

films.push("Les Bronzés");

console.log(films[films.length-1]);

var Film = {
	// Initialise le film
	init: function(titre, annee) {
		this.titre = titre;
		this.annee = annee;
	},
	// Renvoie la description du film
	decrire: function() {
		var description = this.titre + " (" + this.annee + ")";
		return description;
	}
};

var film1 = Object.create(Film);
film1.init("Le lou de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
	console.log(film.decrire());
});