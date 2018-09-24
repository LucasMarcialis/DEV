console.log("aBC".length); // affiche 3
console.log("je suis une chaîne".length) // affiche 18
var mot = "kangourou";
var longueurMot = mot.length; // longueur mot contient la valeur 9
console.log(longueurMot); // affiche 9

// la syntaxe qui consiste à mettre un point entre la chaîne de caractère et le mot length s"appelle la notation pointée. techniquement length est ce que l"on appelle une propriété. on dit qu"on accède à la propriété length de la chaîne de caractères

var motInitial = "bora-bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // affiche "BORA-BORA"

// length est une propriété là où toLowerCase() et toUpperCase sont des méthodes

var chaine = "azerty";
console.log(chaine==="azerty");
console.log(chaine==="querty");

console.log("Azerty" ==="azerty");

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // affiche true

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche T
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

var longueurSport = sport.length
console.log(sport[longueurSport - 1]); // Affiche n
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !

function consoleLetterModification(chaine) {
    var chaine = prompt("Rentrez un mot pour le voir s'afficher dans la console");
    longueurChaine = chaine.length;
    for(i=0;i<longueurChaine;i++) {
        console.log(chaine[i]);
    }
}

consoleLetterModification();