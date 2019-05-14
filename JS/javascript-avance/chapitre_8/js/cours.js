// Ici nous créons une fonction JavaScript, avec quelques erreurs de syntaxe.


/*
function test() {
    alert('Hello !');
}
    
for (var i = 0; i < 10; i++) {
    // On affiche les valeurs de notre boucle dans la console.
	console.log('La valeur de notre boucle est : ' + i);
}

// On crée un objet basique.
var helloObject = {
    english: 'Hello',
	french: 'Bonjour',
	spanish: 'Hola'
};

// Et on l'affiche.
console.log(helloObject);

// Tant qu'à faire, on affiche aussi un tableau.
var helloArray = ['Hello', 'Bonjour', 'Hola'];

console.log(helloArray);

// On déclare une variable contenant un texte quelconque.
var myVar = 'Hello';
    
// Toutes les secondes, on affiche le contenu de cette myvariable dans la console.
setInterval(function() {
    console.log(myVar);
}, 1000);

*/

// La fonction « a » affiche la valeur qu'elle reçoit de « b ».
function a(value) {
    console.log(value);
}

// La fonction « b » incrémente la valeur reçue par « c » puis la passe en paramètre à « a ».
function b(value) {
    a(value + 1);
}

// La fonction « c » incrémente la valeur reçue par la boucle for puis la passe en paramètre à « b ».
function c(value) {
    b(value + 1);
}

// Pour chaque itération, cette boucle passe en paramètre la valeur de « i » à la fonction « c ».
for (var i = 0; i < 10; i++) {
    c(i);
}


// On utilise ci-dessous une IIFE, on déclare donc une fonction anonyme que l'on exécute immédiatement.
(function anonymousWasHere() {
    console.log('Hi!');
})();