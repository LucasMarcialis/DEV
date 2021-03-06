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
var newLinkText = document.createTextNode("Le Site du Zéro ");

newLink.id = 'sdz_link';
newLink.href = 'http://www.siteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');

newLink.appendChild(newLinkText);

document.getElementById('myP3').appendChild(newLink);

/*
Ici, on commence par créer les deux éléments (le lien et le noeud de texte), puis on affecte les variables au lien et on lui ajoute le noeud textuel. a ce stade-ci, l'élément HTML contient le noeud textuel, mais cet éléments n'est pas encore inséré dans le document.
La dernière instruction insère alors le tout.
*/

/*
Nous vous conseillons d'organiser votre code comme le dernier exemple, c'est-à-dire avec la création de tous les éléments au début, puis les différentes opérations d'affectation. Enfin, l'insertion des éléments les uns dans les autres et, pour terminer, l'insertion dans le document. au moins comme ça c'est structuré, clair et surtout bien plus performant !
*/

/*
appendChild() retourne une référence pointant sur l'objet qui vient d'être inséré. Cela peut servir dans le cas où vous n'avez pas déclaré de variable intermédiaire lors du processus de création de votre élément. Par exemple, le code suivant ne pose pas de problème :
*/

var span = document.createElement('span');
document.body.appendChild(span);

span.innerHTML = 'Du texte en plus !';

/*
En revanche, si vous retirez l'étape intermédiaire (la première ligne) pour gagner une ligne de code alors vous allez être embtêté pour modifier le contenu :
*/
document.body.appendChild(document.createElement('span'));

span.innerHTML = 'Du texte en plus !'; // La variable "span" n'existe plus ... Le code plante.
/*
La solution a ce probleme est d'utiliser la référence  retournée par appendChild () :
*/

var span = document.body.appendChild(document.createElement('span'));

span.innerHTML = 'Du texte en plus !'; // Là, tout fonctionne !

console.log(span);


// NOTIONS SUR LES REFERENCES

/*
En JavaScript et comme dans beaucoup de languages, le contenu des variables est "passé par valeur". Cela veut donc dire que si une variable nick1 contient le prénom "Clarisse" et qu'on affecte cette valeur à une autre variable. La valeur est copiée dans la nouvelle. On obtient alors deux variables distinctes contenant la même valeur :
*/

var nick1 = 'Clarisse';
var nick2 = nick1;

/* Si on modifie la valeur de nick2, la valeur de nick1 reste inchangée : normal, les deux variables sont bien distinctes */

// Les références
/*
Outre le "passage par valeur", le javaScript possède un "passage par référence". En fait, quand une variable est crée, sa valeur est mise en mémoire par l'ordinateur. Pour pouvoir retrouver cette valeur, elle est associée à une adresse que seul l'ordinateur connaît et manipule (on ne s'en occupe pas).
Quand on passe une valeur par référence, on transmet l'adresse de la valeur, ce qui va permettre d'avoir deux variables qui pointent sur une même valeur !
Un exemple théorique d'un passage par référence n'est pas vraiment envisageable à ce stade du tutoriel, il faudra attendre d'aborder le chapitre sur la création d'objets. Cela dit, quand on manipule une page Web avec le DOM, on est confrontés à des références, tout comme dans le chapitre suivant sur les évènements.
*/

// Les références avec le DOM
/*
Schématiser le concept de référence avec le DOM est assez simple : deux variables peuvent accéder au même élément. Regardez cet exemple :
*/

var newLink = document.createElement('a');
var newLinkText = document.createTextNode(' - Le Site du Zéro lien n°X');

newLink.id = 'sdz_link';
newLink.href = 'http://www.siteduzero.com';

newLink.appendChild(newLinkText);

document.getElementById('myP3').appendChild(newLink);

// On récupère, via son ID, l'élément fraîchement inséré
var sdzLink = document.getElementById('sdz_link');

sdzLink.href = 'http://www.siteduzero.com/forum.html';

// newLink.href affiche bien la nouvelle URL :
console.log(newLink.href);

/*
La variable newLink contient en réalité une référence vers l'élément <a> qui a été créé. newLink ne contient pas l'élément, il contient une adresse qui pointe vers ce fameux <a>. Une fois que l'élément HTML est inséré dans la page, on peut y accéder de nombreuses autres façons, comme avec getElementById(). Quand on accède à un élément via getElementById(), on le fait aussi au moyen d'une référence.
Ce qu'il faut retenir de tout ça, c'est que les objets du DOM sont toujours accessibles par référence, et c'est la raison pour laquelle ce code ne fonctionne pas :
*/

var newDiv1 = document.createElement('div');
var newDiv2 = newDiv1; // On tente de copier le <div>

/*
Eh oui, si vous avez tout suivi, newDiv2 contient une référence qui pointe vers le même <div> que newDiv1. Mais comment duppliquer un élément alors ? Eh bien, il faut le cloper, et c'est ce que nous allons voir maintenant :
*/

// CLONER, REMPLACER, SUPPRIMER...

// Cloner un élément
console.log('cloneNode()');
/*
Pour cloner, un élément, rien de plus simple : cloneNode(). Cette méthode requiert un paramètre booléen (true ou false) : si vous désirez cloner le noeud avec (true) ou sans (false) ses enfants et ses différents attributs.
Petit exemple très simple : on créé un élément <hr />, et on en veut un deuxième, donc on clone le premier :
*/

// On va cloner un élément créé :
var hr1 = document.createElement('hr');
var hr2 = hr1.cloneNode(false); // Il n'y a pas d'enfants..

// Ici on clone un élément existant :
var paragraph1 = document.getElementById('myP3');
var paragraph2 = paragraph1.cloneNode(true);

// Et attention, l'élément est cloné, mais pas "inséré" tan que l'on a pas appelé appendChild();
paragraph1.parentNode.appendChild(paragraph2);
console.log(paragraph2);

/*
Une chose très importante à retenir, bien qu'elle ne vous concernera qu'au chapitre suivant, est que la méthode cloneNode() ne copie malheureusement pas les événements associés et créés avec le DOM (avec addEventListener()), même avec un paramètre à true. Pensez bien à cela !
*/

// Remplacer un élément par un autre
console.log('replaceChild()');
/*
Pour remplacer un élément, rien de plus simple, il y a replaceChild(). Cette méthode accepte deux paramètres : le premier est le nouvel élément et le deuxième est l'élément à remplacer. Tout comme cloneNode(), cette méthode s'utilise sur tous les types de noeuds (éléments, noeuds textuels, etc.)
Dans l'exemple suivant, le contenu textuel (pour rappel il s'agit du premier enfant de <a> du lien va être remplacé par un autre. La méthode replaceChild() est exécutée sur l'élément <a>, c'est-à-dire le noeud parent du noeud à remplacer.)
*/

var link = document.querySelector('a');
var newLabel = document.createTextNode('et un hyperlien');

link.replaceChild(newLabel, link.firstChild);

// Supprimer un élément
var link = document.querySelector('a');
link.parentNode.removeChild(link);

/*
A noter que la méthode removeChild() retourne l'élément supprimé ce qui veut dire qu'il est parfaitement possible de supprimer un élémnt HTML pour ensuite le réintégrer au DOM :
*/

var link = document.querySelector('a');

var oldLink = link.parentNode.removeChild(link); // On supprime l'élément et on le garde en stock

document.body.appendChild(oldLink); // On réintègre ensuite l'élément supprimé où on veut et quand on veut


// AUTRES ACTIONS
// Vérifier la présence d'éléments enfants
console.log('hasChildNodes()')
/*
Rien de plus facile pour vérifier la présence d'éléments enfants : hasChildNodes(). Il suffit d'utiliser cette méthode sur l'élément de votre choix : si cet élémenyt possède au moins un enfant, lé méthode renverra true :
*/

var paragraph = document.querySelector('p');

console.log(paragraph.hasChildNodes()); // Affiche true

// Insérer à la bonne place : insertBefore()
/*
La méthode insertBefore() permet d'insérer un élément avant un autre. Elle reçoit deux paramètres : le premier est l'élément à insérer, tandis que le deuxième est l'élément avant lequel l'élément va être inséré. Exemple :
*/

var paragraph = document.getElementById('myP2'),
	emphasis = document.createElement('em'),
	emphasisText = document.createTextNode('en emphase légère ');

emphasis.appendChild(emphasisText);

paragraph.insertBefore(emphasis, paragraph.lastChild);

// Une bonne astuce : insertAfter()
console.log('insertAfter()');
/*
Le javaScript met à disposition insertBefore() mais pas insertAfter(). C'est dommage car, bien que l'on puisse s'en passer, cela est parfois assez utile. Qu'à cela ne tienne, créons donc une telle fonction.
Malheureusement, il ne nous est pas possible à ce stade-ci du cours de créer une méthode qui s'appliquerait comme ceci :
// element.insertAfter(newElement, afterElement);
Non, il va nous falloir nous contenter d'une "simple" fonction :
// insertAfter(newElement, afterElement);
*/

// Algorithme
/*
Pour insérer après un élément, on va d'abord récupérer l'élément parent. C'est logique, puisque l'insertion de l'élément va se faire soit via appendChild(), soit via insertBefore(): si on veut ajouter notre élément après le dernier enfant, c'est simple, il suffit d'appliquer appendChild(). Par contre, si l'élément après lequel on veut insérer notre élément n'est pas le dernier, on va utiliser insertBefore()en ciblant l'enfant suivant, avec nextSibling
*/

function insertAfter(newElement, afterElement) {
    var parent = afterElement.parentNode;
	
    if (parent.lastChild === afterElement) { // Si le dernier élément est le même que l'élément après lequel on veut insérer, il suffit de faire appendChild()
        parent.appendChild(newElement);
    } else { // Dans le cas contraire, on fait un insertBefore() sur l'élément suivant
        parent.insertBefore(newElement, afterElement.nextSibling);
    }
}

