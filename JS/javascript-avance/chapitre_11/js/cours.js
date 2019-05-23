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

// nodeType et nodeName
console.log('[nodeType et nodeName]');
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
console.log('[firstChild et lastChild]');
/*
Comme leur nom le laisse présager, firstChild et lastChild servent respectivement à accéder au premier et au dernier enfant d'un noeud.
*/

var paragraph2 = document.getElementById('myP2');
var first2 = paragraph2.firstChild;
var last2 = paragraph2.lastChild;

console.log(first2.nodeName.toLowerCase());
console.log(last2.nodeName.toLowerCase());

/*
Dans le cas où vous ne souhaiteriez récupérer que les enfants qui sont considérés comme des éléments HTML (et donc éviter les noeuds #text par exemple), sachez qu'il existe les propriétés firstElementChild et lastElementChild. Ainsi dans l'exemple précédent, la propriété firstElementChild renverrait l'élément <a<. Malheureusement, ces deux propriétés ne sont supportées qu'à partir de la version 9 d'Internet Explorer.
*/

// nodeValue et data
console.log('[nodeValue et data]');
/*
Pour récupérer le texte du premier enfant et le texte contenu dans l'élément <strong>, il faut soit utiliser la propriété nodeValue soit la propriété data
*/

console.log(first2.nodeValue);
console.log(last2.firstChild.data);

/*
first2 contient le premier noeud, un noeud textuel. Il suffit de lui appliquer la propriété nodeValue (ou data) pour récupérer son contenu ; pas de difficulté ici. En revanche, il y a une petite différence avec notre élément <strong> : vu que les propriétés nodeValue et data ne s'appliquent que sur des noeuds textuels, il nous faut d'abord accéder au noeud textuel que contient notre élément, c'est-à-dire son noeud enfant. Pour cela, on utilise firstchild (et non pas firstElementChild), et ensuite on récupère le contenu avec nodeValue ou data.
*/

// childNodes
console.log('[childNodes]');
/*
la propriété childNodes retourne un tableau contenant la liste des enfants d'un élément. L'exemple suivant illustre le fonctionnement de cette propriété, de manière à récupérer le contenu des éléments enfants :
*/

var children2 = paragraph2.childNodes;

for (var i = 0, c = children2.length; i < c; i++) {
	if (children2[i].nodeType === Node.ELEMENT_NODE) { // C'est un élément HTML
		console.log(children2[i].firstChild.data);
	} else { // C'est certainement un noeud textuel
		console.log(children2[i].data);
	}
}

/*
Vous remarquerez que nous n'avons pas comparé la propriété nodeType à la valeur 1 mais à Node.ELEMENT_NODE, il s'agit en fait d'une constant qui contient la valeur 1, ce qui est plus facile à lire que le chiffre seul. Il existe une cosntante pour chaque type de noeud.
*/

// nextSibling et previousSibling
console.log('[nextSibling et previousSibling]');
/*
nextSibling et previousSibling sont deux propriétés qui permettent d'accéder respectivement au noeud suivant et au noeud précédent
*/

var next2 = first2.nextSibling;
var previous2 = last2.previousSibling;

console.log(next2.firstChild.data); // Affiche "un lien"
console.log(previous2.data);// Affiche " et "

/*
Dans cet exemple, on récupère le premier enfant de myP2, et sur ce premier enfant, on utilise nextSibling, qui permet de récupérer l'élément <a<. Avec ça, il est même possible de parcourir les enfants d'un élément, en utilisant une boucle while :
*/

var child = paragraph2.lastChild; // On prends le dernier enfant 

while (child) {
	if (child.nodeType === Node.ELEMENT_NODE) { // C'est un élément
		console.log(child.firstChild.data);
	} else { // C'est certainement un noeud textuel
		console.log(child.data);
	}
	child = child.previousSibling; // A chaque tour de boucle, on prend l'enfant précédent
}

console.log('Si on prends la boucle dans l\'autre sens');

while (first2) {
	if (first2.nodeType === Node.ELEMENT_NODE) {
		console.log(first2.firstChild.data);
	} else {
		console.log(first2.data);
	}
	first2 = first2.nextSibling;
}

/*
Tout comme pour firstChild et lastchild, sachez qu'il existe les propriétés nextElementSibling et previousElementSibling qui permettent, elles aussi, de ne récupérer que les éléments HTML. Ces deux propriétés ont les mêmes problèmes de compatibilité que firstElementChild et lastElementChild.
*/

// Attention aux noeuds vides

/*
chaque espace entre les éléments tout comme les retours à la ligne sont considérés comme des noeuds textuels (cela dépend des navigateurs) !

Heureusement, il existe une solution à ce problèùe ! Les attributs firstElementChild, lastElementChild, nextElementSibling et previousElementSibling ne retournent que des éléments HTML et permettent donc d'ignorer les noeuds textuels. Ils s'utilisent exactement de la même manière que les attributs de base (firstChild, lastChild etc.). Attention, ces attributs ne sont pas supportés par les versions d'Internet Explorer antérieures à la 9.
*/


// CREER ET INSERER DES ELEMENTS
console.log('[Créer et insérer des éléments]');
// Ajouter des éléments HTML

/*
Avec le DOM, l'ajout d'un élément se fait en trois temps :
 1) On créé l'élément
 2) on lui affecte des attributs
 3) On l'insère dans le document, et ce n'est qu'à ce moment-là qu'il sera "ajouté"
*/

// Création de l'élement
/*
La création d'un élément se fait avec la méthode createElement(), un sous-objet de l'objet racine, c'est-à-dire document dans la majorité des cas :
*/

var newLink = document.createElement('a');
/*
On crée ici un nouvel élément <a>. Cet élément est créé, mais n'est pas inséré dans le document, il n'est donc pas visible. Cela dit, on peut déjà travailler dessus, en lui ajoutant des attributs ou même des événements (que nous verrons dans le chapitre suivant).
*/

// Affectation des attributs
/*
Ici, c'est comme nous avons vu précédemment : on définit les attributs, soit avec setAttribute() soit directement avec les propriétés adéquates.
*/

newLink.id    = 'sdz_link';
newLink.href  = 'http://www.siteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');

// Insertion de l'élément

/*
On utilise la méthode appendChild() pour insérer l'élément. Append child signifie "ajouer un enfant", ce qui signifie qu'il nous faut connaître l'élément auquel on va ajouter l'élément créé.

On va ajouter notre élément <a> dans l'élément <p> portant l'ID myP2. Pour ce faire, il suffit de récupérer cet élément et d'ajouter notre élément <a< via appendChild() :
*/

document.getElementById('myP3').appendChild(newLink);

/*
On voit que l'élément <a> existe, mais n'est pas lié. Un peu comme s'il était libre dans le document : il n'est pas encore placé. Le but est de le placer comme enfant de l'élément myP3. La méthode appendChild() va alors déplacer notre <a> pour le placer en tant que dernier enfant de myP3.
Cela veut dire qu'appendChild insérera toujours l'élément en tant que dernier enfant, ce qui n'est pas toujours très pratique.
*/

// Ajouter des noeuds textuels

/*
L'élément a été inséré, seulement il manque quelque chose:  le contenu textuel ! La méthode createTextNode() sert à créer un noeud textuel (de type #text) qui'l nous suffira d'ajouter à notre élément fraichement inséré comme ceci :
*/

var newLinkText = document.createTextNode("Le site du Zéro");

newLink.appendChild(newLinkText);

/*
L'insertion se fait ici aussi avec appendChild(), sur l'élément newLink. Afin d'y voir plus clair, résumons le code :
*/

var newLink = document.createElement('a');

newLink.id = 'sdz_link';
newLink.href = 'http://www.lesiteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');

document.getElementById('myP3').appendChild(newLink);

var newLinkText = document.createTextNode('Le Site du Zéro');

newLink.appendChild(newLinkText);

/*
Le fait d'insérer via appendChild() n'a aucune incidence sur l'ordre d'exécution des instructions. Cela veut donc dire que l'on peut travailler sur les éléments HTML et les noeuds textuels sans qu'ils soient au préalable insérés dans le document. Par exemple, on pourrait ordonner le code comme ceci : 
*/

var newLink = document.createElement('a');
var newLinkText = document.createTextNode("Le Site du Zéro");

newLink.id = 'sdz_link';
newLink.href = 'http://www.siteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');

newLink.appendChild(newLinkText);

document.getElementById('myP').appendChild(newLink);

/*
Ici, on commence par créer les deux éléments (le lien et le noeud de texte), puis on affecte les variables au lien et on lui ajoute le noeud textuel. a ce stade-ci, l'élément HTML contient le noeud textuel, mais cet éléments n'est pas encore inséré dans le document.
La dernière instruction insère alors le tout.
*/
/*
Nous vous conseillons d'organiser votre code comme le dernier exemple, c'est-à-dire avec la création de tous les éléments au début, puis les différentes opérations d'affectation. Enfin, l'insertion des éléments les uns dans les autres et, pour terminer, l'insertion dans le document. au moins comme ça c'est structuré, clair et surtout bien plus performant !
*/
