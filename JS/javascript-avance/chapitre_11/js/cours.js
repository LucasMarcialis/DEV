/* MANIPULER LE CODE HTML 2 */


// Naviguer entre les noeuds
// La propriété parentNode

/*
La propriété parentNode permet d'accéder à l'élément parent d'un élément.
Admettons qu'on doive accéder à myP, et que pour une autre raison, on doive accéder à l'élém"nt wblockquote>, qui est le parent de myP. Il suffit d'accéder à myP puis à son parent, avec parentNode :
*/

var paragraph = document.getElementById('myP');
var blockquote = paragraph.parentNode;
console.log(blockquote);

// nodType et nodeName

/*
NodeType et nodeName servent respectivement à vérifier le type d'un noeud et le nom d'un noeud. nodeType retourne un nombre, qui correspond à un type de noeud. Voici les noeuds les plus importants :

1 - Noeud élément
2 - Noeud attribut
3 - Noeud texte
8 - Noeud pour commentaire

nodeName, quent à lui, retourne simplement le nom de l'élément, en majuscule. Il est toutefois conseillé d'utiliser toLowerCase() ou toUpperCase() pour forcer un format de casse et éviter les mauvaises surprises.
*/

console.log(paragraph.nodeType + '\n' + paragraph.nodeName.toLowerCase());

// Lister et parcourir des noeuds enfants
// firstChild et lastChild

/*
Comme leur nom le laisse présager, firstChild et lastChild servent respectivement à accéder au premier et au dernier enfant d'un noeud.
*/

var paragraph2 = document.getElementById('myP2');
var first2 = paragraph2.firstChild;
var last2 = paragraph2.lastChild;

console.log(first2.nodeName.toLowerCase());
console.log(last2.nodeName.toLowerCase());



