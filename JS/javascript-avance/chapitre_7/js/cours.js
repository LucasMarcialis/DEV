/* ---- CHAPITRE 7 : Les objets et tableaux ---- */

// Introduction aux Objets
/*
JavaScript est un language orienté objet.
Un objet est un concept, une idée ou une chose.
Un ojet possède une structure qui lui permet de pouvoir fonctionner et d'interagir avec d'autres objets

Une variable contient surtout un objet
Exemple :
*/
var myString = 'Ceci est une chaîne de caractères';
/*
La variable myString contient un objet et cet objet représente une chaîne de caractères.
C'est la raison pour laquelle on dit que le JavaScript n'est pas un language typé car les variables contiennent toujours la même chose : un objet. Mais cet objet peut être de nature différente (un nombre, un booléen ...).
*/

// Que contiennent les objets ?
/*
Ils contiennent 3 choses :
- Un constructeur
- Des propriétés
- Des méthodes

Le constructeur est un code qui est exécuté lorsqu'on utilise un nouvel objet. Il permet d'effectuer des actions comme définir diverses variables au sein même de l'objet (comme le nombre de caractères d'une chaîne de caractères).

Les propriétés : toute valeur va être placée dans une variable au sein de l'objet : c'est ce que l'on appelle une propriété. Une propriété est une variable contenue dans l'objet, elle contient des informations nécessaires au fonctionnement de l'objet.

Les méthodes : Il est possible de modifier l'objet par l'intermédiaire de méthodes qui sont des fonctions contenues dans l'objet et qui permettent de réaliser des opérations sur le contenu de l'objet. Par exemple, dans le cas d'une chaîne de caractères, il existe une méthode qui permet de mettre la chaîne de caractères en majuscules.

Exemple :
*/

var myString = 'Ceci est une chaîne de caractères'; // On créé un objet String

console.log(myString.length); // On affiche le nombre de caractères, au moyen de la propriété "length"

console.log(myString.toUpperCase()); // On récupère la chaîne en majuscules, avec la méthode toUpperCase()

/*
On remarque la présence d'un point dans le code directement collé après l'objet qui permet d'accéder aux propriétés et aux méthodes d'un objet.

Ces méthodes et propriétés sont mises à jour lorsqu'on modifie l'objet :
*/

var myString = 'Test';
console.log(myString.length); // Affiche : « 4 »

myString = 'Test 2';
console.log(myString.length); // Affiche : « 6 » (l'espace est aussi un caractère)

/*
So far nous avons rencontré les objets natifs suivants :
Number : l'objet qui gère les nombres
Boolean : l'objet qui gère les booléens
String : l'objet qui gère les chaînes de caractères
*/

// Les tableaux

/*
Un tableau ou array contient plusieurs valeurs appelées items. chaque item est accessible au moyen d'un indice ou index et dont la numérotation commence à partir de 0
Index > Donnée
	0 > item 1
	1 > item 2
	2 > item 3
	3 > item 4
	4 > item 5

Pour déclarer un tableau, on utilise var avec une syntaxe légèrement différente :
*/
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

var myArray_a = [42, 12, 6, 3];
var myArray_b = [42, 'Sébastien', 12, 'Laurence'];

/*
Le déclaration par crochets est la syntaxe courte, il se peut que vous rencontriez une syntaxe plus longue qui est vouée à disparaître
*/
var myArray = new Array('Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume');

/* Le mot-clé new de cette syntaxe demande au JavaScript de définir un nouvel array dont le contenu se trouve en paramètre (un peu comme une fonction).
*/

// Récupérer une valeur via l'index :

var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

myArray[1] = 'Clarisse';

console.log(myArray[1]); // Affiche Clarisse


// Opérations sur les tableaux

// La méthode push() permet d'ajouter un à plusieurs items à un tableau :
 var myArray = ['Sébastien', 'Laurence'];

 myArray.push('Ludovic'); // Ajoute Ludovic à la fin du tableau
 myArray.push('Pauline', 'Guillaume'); // Ajoute Pauline et Guillaume à la fin du tableau

 console.log(myArray);

/*
La méthode unshift() fonctionne comme push sauf que les items sont ajoutés au début du tableau. Cette méthode n'est pas très fréquente mais peut être très utile

Les méthodes shift() et pop() retirent respectivement le premier et le dernier élément du tableau
*/

myArray.shift(); // Retire "Sébastien"
console.log(myArray);
myArray.pop(); // Retire "Guillaume"
console.log(myArray);

// Chaînes de caractères et tableaux
/*
Les chaînes de caractères possèdent une méthode split() qui permet de les découper en un tableau, en fonction d'un séparateur. Prenons l'exemple suivant :
*/
var cousinsString = "Pauline Guillaume Clarisse",
	cousinsArray = cousinsString.split(' ');
console.log(cousinsArray);
/*
La méthode split() va couper la chaîne de caractères à chaque fois qu'elle va rencontrer un espace. Les portions ainsi découpées sont placées dans un tableau, ici cousinsArray
*/
/* L'inverse de split(), c'est à dire de créer une chaîne de caractères depuis un tableau, se nomme join()
*/
var cousinsString_2 = cousinsArray.join('-');
console.log(cousinsString_2);

/* Comme vous pouvez le cosntater, une méthode peut très bien retourner une valeur tout comme le ferait une fonction indépendant d'un objet. D'ailleurs on constate que split() et join() retournent toutes les deux le résultat de leur exécution, elles ne l'appliquent pas directement à l'objet.
*/

// Parcourir un tableau
/*
Parcourir un tableau signifie passer en revue chaque item du tableau pour, par exemple, afficher les itels un à un, leur faire subir des modifications ou exécuter des actions en fonction de leur contenu
Nous pouvons utiliser la boucle while mais for est la plus adaptée pour cela
*/
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}
/* Attention à la condition
Nous avons volontairement mal rédigé le code précédent. En effe,t dans le chapitre sur les boucles, nous avons dit que le deuxième bloc d'une boucle for, le bloc de condition était exécuté à chaque itération.
Ici cela veut donc dire que myArray.length est utilisé à chaque itération, ce qui, à part ralentir la boucle, n'a que peu d'intérêt puisque le nombre d'itels du tableau ne change normalement pas (dans le cas contraire n'utilisez pas la solution qui suit).
L'astuce est de définir une seconde variable, dans le bloc d'initialisation qui contiendra la valeur de length. On utilisera cette variable pour la condition :
"c" est utilisé comme nom de variable ce qui signifie count (compter) en anglais
*/
for (var i = 0, c = myArray.length; i < c; i++) {
	console.log(myArray[i]);
}

// Les objets littéraux
/*
S'il est possible d'accéder aux items d'un tableau via leur indice, il peut être pratique d'y accéder au moyen d'un identifiant. Par exemple, dans le tableau des prénoms, l'iem appelé sister pourrait retourner la valeur "Laurence"
*/
var family = {
	self: 'Sébastien',
	sister: 'Laurence',
	brother: 'Ludovic',
	cousin_1: 'Pauline',
	cousin_2: 'Guillaume'
};
/*
Cette déclaration va créer un objet analogue à un tableau, excepté le fait que chaque item sera accessible au moyen d'un identifiant (self, sister etc..)
*/

// La syntaxe d'un objet
/*
Pour créer un objet, il suffit de mettre des accolades à la place des crochets:
*/
var myObject = {
	item1: "Texte 1",
	item2: "Texte 2",
	item3: "Texte 3",
}

// Accéder aux items
/*
Revenons à notre objet littéral : ce que nous avons créé est un objet et les identifiants sont en réalité des propriétés exactement comme la propriété length d'un tableau ou d'une chaîne de caractères. Donc, pour récupérer le nom de la soeur, il suffit de faire :
*/
family.sister;
/*
Ou une manière semblable d'accéder aux items d'un tableau en connaissant l'indice sauf qu'ici, on va simplement spécifier le nom de la propriété :
*/
family['Sister'];
/*
Cela va nous être particulièrement utile si l'identifiant est contenu dans une variable, comme ce sera le cas avec la boucle que nous allons voir après.
Exemple :
*/
var id = "sister";
console.log(family[id]); // Affiche Laurence

console.log(myArray.length);
console.log(myArray['length']);

// Ajouter des items
/* La méthode push() existe pour un tableau et non un objet. En revanche il est possible d'ajouter un item en spécifiant un identitiant encore non présent. Par exemple, si nous voulons ajouter un oncle dans le tableau :
*/
family['uncle'] = 'Didier';
// Ou
family.uncle = 'Didier';

// Parcourir un objet avec for in
/*
Il n'est pas possible de parcourir un objet littéral avec une boucle for. Normal puisqu'une boucle for est capable d'incrémenter une variable numérique ce qui ne nous est d'aucune utilité puisque nous devons posséder un identifiant.
for in est l'équivalent de la boucle foreach du PHP : elle est simple et ne sert qu'à une cose : parcourir un objet.
Le fonctionnement est le même que pour un tableau, excepté qu'ici il suffit de fournir une variable clé qui recoit un identifiant (au lieu d'un index) et de spécifier l'objet à parcourir :
*/
console.log("for in");
for (var id in family) { // On stocke l'identifiant dans "id" pour parcourir l'objet family
	console.log(family[id]);
}

// Utilisation des objets littéraux
/*
Les objets littéraux ne sont pas souvent utilisés mais peuvent se révéler très utiles pour ordonner un code. On les utilise aussi dans les fonctions: les fonctions, avec return ne savent retourner qu'une variable. Si on veut retourner plusieurs variables, il faut les placer dans un tableau et retourner ce dernier. Mais il est plus commode d'utiliser un objet littéral.
L'exemple classique est la fonction qui calcule les coordonnées d'un élément HTML sur une page Web. Il faut ici retourner les coodronnées x et y
*/
function getCoords() {
	/* Script incomplet juste pour l'exemple */

	return {
		x: 12,
		y: 21
	};
}

var coords = getCoords();

console.log(coords);

console.log(coords.x); // 12
console.log(coords.y); // 21