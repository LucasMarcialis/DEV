<<<<<<< HEAD
var nicks = [],
    nick;

while (nick = prompt('Entrez un prénom :')) {
        nicks.push(nick);
}
if (nicks.length > 0) {
	alert(nicks.join(' '));
} else {
	alert("Vous n'avez pas rentré de prénom");
=======
var nicks = [], // Création du tableau vide
    nick;

while (nick = prompt('Entrez un prénom :')) { // Si la valeur assignée à la variable « nick » est valide (différente de « null ») alors la boucle s'exécute
    nicks.push(nick); // Ajoute le nouveau prénom au tableau
}

if (nicks.length > 0) { // On regarde le nombre d'items
    alert(nicks.join(' ')); // Affiche les prénoms à la suite
} else {
    alert('Il n\'y a aucun prénom en mémoire !');
>>>>>>> 0cba75ac07312371005fe71fc2a4d29a705f6e2b
}