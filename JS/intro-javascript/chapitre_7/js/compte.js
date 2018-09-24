var compte = {
	titulaire: "Alex",
	solde: 0,

	crediter: function(montantCredit) {
		this.solde = this.solde + montant;
	},
	debiter: function(montantDebit) {
		this.solde = this.solde - montant;
	},
	decrire: function() {
		var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
		return description;
	}
}

console.log(compte.decrire());
var montant = Number(prompt("Rentrez un montant à rajouter au solde du compte"));
compte.crediter(montant);
var montant = Number(prompt("Rentrez un montant à enlever au solde du compte"));
compte.debiter(montant);
console.log(compte.decrire());