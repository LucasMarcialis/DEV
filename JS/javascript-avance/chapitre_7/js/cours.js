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
 myArray.push('Pauline', 'Guillaume');