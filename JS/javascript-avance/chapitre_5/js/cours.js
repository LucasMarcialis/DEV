/* CHAPITRE 5 */

// Incrémentation
i = 0;
number = ++i;
console.log(i); // Affiche 1
console.log(number); // Affiche 1

// Mais aussi
i = 0;
number = i++;
console.log(i); // Affiche 1
console.log(number); // Affiche 0

// Décrémentation
i = 0;
number = i--;
console.log(i); // Affiche -1
console.log(number); // Affiche 0


i = 0;
number = --i;
console.log(i); // Affiche -1
console.log(number); // Affiche -1

i = 0;
while(i<4) {
	i++;
	console.log(i);
}


var nicks = '',
	nicks;

	while (true) {
		nick = prompt('Entrez un prénom :');

		if (nick) {
			nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'un espace juste après
		} else {
			break; // On quitte la boucle
		}
	}

alert(nicks); // Affiche les prénoms à la suite


// for (initialisation; condition; incrémentation)
// Très pratique pour compter ainsi que pour répéter la boucle un nombre défini de fois.

for(var i = 5; i < 8; i++) {
	console.log(i);
}


for(var i = 0, nicks = '', nick; true; i++) {
	nick = prompt('Entrez un prénom :');

	if (nick) {
		nicks += nick + ' ';
	} else {
		break;
	}
}

alert('Il y a ' + i + ' prénoms :\n\n' + nicks);

/*
Selon la position de l'opérateur la variable numberincrémentation et la décrémentation varient selon la position de l'opérateur.
Quel que soit la position des signes, la variable i incrémente ou décrémente.
*/