// TODO : ajoutez ici la définition de l'objet perso
var perso = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	xp: 0,
	decrire: function() {
		var description = this.nom + " a " + this.sante + " points de vies, " + this.force + " points de force, " + this.xp + " points d'expérience.";
		return description;
	}
}

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());