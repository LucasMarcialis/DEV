// Chapitre 7, la POO, Programation Orienté Objet

/*
Un objet est une entité qui possède des propriétés
Penser à un stylé : couleur d'écriture bleue, encre à bille etc..

La POO modifie la manière d'écrire les programmes en utilisant des objets.
Quand on utilise la POO, on cherche à représenter le domaine étudié sous la forme d'objets informatiques.
Chaque objet informatique modélisera un élément de ce domaine.

Jusqu'à précent nous avions appris à écrire un programme sous la forme de fonctions.
C'est la programmation procédurale.
*/

// Objet littéral

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};

// Création d'un objet à l'aide d'un constructeur

function MonObjet() {
	// Initialisation de l'objet
	// ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; // Ajoux de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");

var perso = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	decrire: function() {
			var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force.";
			return description;
	}
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

// une propriété dont la valeur est une fonction est appelée une méthode.
// Une méthode permet de définir une action pour un objet. On dit également qu'une méthode ajoute à cet objet un comportement

// Pour appeler une méthode nomMethode sur un objet nomObjet, on utilisa la syntaxe nomObjet.nomMethode()

// this est défini automatiquement par JavaScript à l'intérieur d'une méthode et représente l'objet sur lequel la méthode a été appelée.

var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;
// Renvoi la description du personnage
perso.decrire = function() {
	var description = this.nom + " & " + this.sante + " points de vie et " + this.force + " en force";
	return description;
}
console.log(perso.decrire());

// Objet littéral :

var perso = {
	prenom: "Lucas",
	nom: "Marcialis",
	age: 24,
	hobby: "JavaScript",
	decrire: function() {
		var description = this.prenom + " " + this.nom + " a " + this.age + " ans et il aime " + this.hobby;
		return description;
	}
}
console.log(perso.decrire());

var perso = {};
perso.prenom = "Lucas";
perso.nom = "Marcialis";
perso.age = 24;
perso.hobby = "JavaScript";

perso.decrire = function() {
	var description = this.prenom + " " + this.nom + " a " + this.age + " ans et il aime " + this.hobby;
	return description;
}
console.log(perso.decrire());



















































var carolinePetard = {
	prenom: "Caroline",
	nom: "Pétard",
	age: 24,
	decrire: function() {
		var description = this.prenom + " " + this.nom + " a " + this.age + " ans.";
		return description;
	}
}


console.log(carolinePetard.decrire());