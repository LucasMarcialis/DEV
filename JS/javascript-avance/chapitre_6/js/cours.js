/* CHAPITRE 6 */

// Différence structure et instructions
/*
Les fonctions, conditions, boucles sont des structures JS là où tout le reste  (l'assignation de variable, l'exécution d'une fonction) sont des instructions.
Les structures ne prennent donc pas de point-virgule à leur fin à la différence des instructions qui en prennent.
*/

// Fonction isolée
/*
Le but d'une fonction isolée est d'éviter qu'une partie de votre code n'affecte tout le reste.
Une fonction isolée est une IFE : Imediately Invoked Function et est donc une instruction, elle prends donc un point-virgule à sa fin.
*/

// Ce code :
(function Test() {
	// Code isolé
});

// Devient :
/* (Test)(); */

// Qui devient :
/* Test(); */

// Si l'on anonymise la fonction, on obtient une fonction isolée :

(function () {
	// Code isolé
})();

var test = "noir";

(function() { // Début de la zone isolée
	var test = "blanc";

	alert ("Dans la zone isolée la couleur est : " + test);

})(); // fin de la zone isolée, les variables créées dans cette zone sont alors détruites

alert ("Dans la zone non-isolée, la couleur est : " + test);