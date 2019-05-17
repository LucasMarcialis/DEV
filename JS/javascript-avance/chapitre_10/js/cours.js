/* MANIPULER LE CODE HTML */

// Le DOM est une API

// L'objet window
/*
L'objet window est un objet global qui représente la fenêtre du navigateur
Exemple avec l'alert 'Hello World' dans la balise script du body du code HTML du cours
alert() n'est pas vraiment une fonction, il s'agit d'une méthode appartenant à l'objet window.
L'objet window est dit IMPLICITE. Il n'y a généralement pas besoin de le spécifier.
Ainsi les deux instructions produisent le même effet:
*/
window.alert('Hello world!');
alert('Hello world!');
/*
Attention, si alert() est une méthode de l'objet window, toutes les fonctions ne font pas partie de l'objet window.
isNaN(), parseInt() etc ... ne dépendent pas d'un objet, ce sont des fonctions globales. Ces dernières sont cependant extrèmement rares.
*/
/*
De même, lorsque vous déclarez une variable dans le contexte global de votre script, cette variable deviendra en vérité une propriété de l'objetwindow. Afin de vous démontrer facilement la chose, regardez donc ceci :
*/
var text = 'Variable globale !';

(function() { // On utilise une IIFE pour « isoler » du code

    var text = 'Variable locale !';

    alert(text); // Forcément, la variable locale prend le dessus

    alert(window.text); // Mais il est toujours possible d'accéder à la variable globale grâce à l'objet « window »

})();

/*
Toute variable non déclarée (sans le mot var), deviendra immédiatement une propriété de l'objet window quelque soit l'endroit où vous utilisez cette variable !
*/

(function() { // on utilise une IIFE pour "isoler" du code
	text  = 'Variable accessible !'; // Cette variable n'a jamais été déclarée et pourtant on lui attribue une valeur
})();

alert(text);

/*
JavaScript va chercher à résoudre le problème que nous lui avons donné càd attribuer une valeur pour la variable text. Ne la trouvant pas en tant que "text", il va la chercher en tant que "window.text"
Ce qui veut dire qu'en écrivant :
*/
text = "Variable accessible !";
// Le code sera alors interprété de cette manière si aucune variable accessible n'existe avec ce nom :
window.text = "Variable accessible";

// Le document
/*
L'objet document est un sous-objet de window, l'un des plus utilisés. Et pour cause, il représente la page Web et plus précisément la balise <html>. C'est grâce à cet élément-là que nous allons pouvoir accéder aux éléments HTML et les modifier. 
*/

// NAVIGUER DANS LE DOCUMENT
// La structure DOM
/*
Le DOM est une architecture du code HTML sous forme d'arborescence.
L'élément html contient des enfants head et body. Pour chaque enfant

Si l'on prends le code source de la page HTML de ce chapitre, l'élément <html> contient deux éléments appelés enfants : <head> et <body>. Pour ces deux enfants, <hml> est l'élément parent. Chaque élément est appelé noeud ou node en anglais.
L'élément <head> contient lui aussi deux enfants : <meta> et <title>.
<meta> ne contient pas d'enfants, tandis que wtitle> en contient un, qui s'appelle #text. Comme son nom l'indique, #text est un élément qui contient du texte.
Il est important de bien saisir cette notion : le texte présent dans une page Web est vu par le DOM comme un noeud de type #text. Dans le schéma précédent, l'exemple du paragraphe qui contient du texte et un lien illustre bien cela :

<p>
    Un peu de texte
    <a>et un lien</a>
</p>

Si on va à la ligne après chaque noeud, on remarque clairement que l'élément <p> contient deux enfants : #text qui contient "Un peu de texte" et <a> qui contient lui même un enfant #text représentant "et un lien".

*/

// La structure DOM
/*
L'accès aux éléments HTML via le DOM est assez simple mais demeure actuellement plutôt limité. L'objet document possède trois méthodes principales :
- getElementById()
- getElementsByTagName()
- getelementsByName()
*/

// getElementById() :
/*

Cette méthode permet d'accéder à un élément en connaissant son ID qui est simplement l'attribut id de l'élément
Si dans une page, on veut récupérer le <div> de l'id myDiv, on fera comme cela :
*/
var div = document.getElementById('myDiv');

console.log(div);

// getElementsByTagName() :
/*
Faites très attention dans le nom de cette méthode:  il y a un "s" à Elements. C'est une source fréquente d'erreurs.

Cette méthode permet de récupérer, sous la forme d'un tableau, tous les éléments de la famille. si, dans une page, on veut récupérer tous les <div>, il suffit de faire comme ceci :
*/

var divs = document.getElementsByTagName('div');

for (var i = 0, c = divs.length ; i < c ; i++) {
	console.log('Element n° ' + (i + 1) + ' : ' + divs[i]);
}

/*
La méthode retourne une collection d'éléments (utilisable de la même manière qu'un tableua). Pour accéder à chaque élément, il est nécessaire de parcourir le tableau avec une petite boucle.

Deux astuces :
1) Cette méthode est accessible sur n'importe quel élément HTML et pas seulement sur l'objet document
2) En paramètre de cette méthode vous pouvez mettre une chaîne de caracètres contenant un astérisque* qui récupèrera tous les éléments HTML contenus dans l'élément ciblé.
*/

// getElementsByName();
/*
Cette méthode est samblable à getelementsByTagName() et permet de ne récupérer que les éléments qui possèdent un attribut name que vous spécifiez. L'attribut name n'est utilisé qu'au sein des formulaires, et est déprécié depuis la spécification HTML5 dans tout autre élément que  celui d'un formulaire. Par exemple, vous pouvez vous en servir pour un élément <input> mais pas pour un élément <map>.
Sachez aussi que cette méthode est dépréciée en XHTML mais est standardisée en HTML5.
*/

// Accéder aux éléments grâce aux technologies récentes
/*
Ces dernières années, le JavaScript a beaucoup évolué pour faciliter le développement Web. Les deux méthodes que nous allons étudier sont récentes et ne sont pas supportées par les très vieilles versions des navigateurs, leur support commence à partir de la version 8 d'Internet Explorer, pour les autres navigateurs, vous n'avez normalement pas de soucis à vous faire.

Ces deux méthodes sont querySelector() et querySelectorAll() et ont pour particularité de grandement simplifier la sélection d'éléments dans l'arbre DOM grâce à leur mode de fonctionnement. 

Ces deux méthodes prennent pour paramètre un seul argument : une chaîne de caractères !
Cette chaîne de caractères doit être un sélecteur CSS comme ceux que vous utilisez dans vos feuilles de style. Exemple :

#menu . item span

Ce sélecteur CSS stipule que l'on souhaite sélectionner les balises de type <span> contenues dans les classes .item elle mêmes contenues dans un élément dont l'identifiant est #menu

Le principe est pltôt simple mais très efficace. Sachez que ces deux méthdes supportent aussi les sélecteurs CSS 3, bien plus complets !

Voyons maintenant les particularités de ces deux méthodes. La première querySelector(), renvoie le premier élément trouvé correspondant au sélecteur CSS, tandis que querySelectorAll() va renvoyer tous les éléments (sous forme de tableau), correspondant au sélecteur CSS fourni. Prenon un exemple simple via le code HTML de ce cours.
*/

var query = document.querySelector('#menu .item span'),
	queryAll = document.querySelectorAll('#menu .item span');

console.log(query.innerHTML); // Affiche : "Element 1"

console.log(queryAll.length);
console.log(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML) // Affiche : "Element 1 - Element 2"

/*
Dans le code précédent, nous avons utilisé une nouvelle propriété nommée innerHTML qui permet d'accéder au contenu d'un élément HTML.
*/

// L'héritage des propriétés et des méthodes
/*
Le JavaScript voit les éléments HTML comme étant des objets, cela veut donc dire que chaque élément HTML possède des propriétés et des méthodes. Cependant faites bien attention prace que tous ne possèdent pas les mêmes propriétés et méthodes. Certaines sont néanmoins communes à tous les éléments HTML, car tous les éléments HTML sont d'un même type : le type Node, qui signifie noeud en anglais.
*/

// Notion d'héritage
/*
Nous avons vu qu'un élément <div> est un objet HTMLDivElement, mais un objet, en JavaScript, peut appartenir à différents groupes. Ainsi notre <div> est un HTMLDivElement, qui est un sous-objet d'HTMLElement qui est lui-même un sous-objet d'Element.

NODE
 |
Element
 |
HTMLElement
 |
HTMLDivElement

L'objet node apporte un certain nombre de propriétés et de méthodes qui pourront être utilisées depuis un de ses sous-objets. En claire, les sous-objets héritent des propriétés et méthodes de leurs objets parents. Voici ce que l'on appelle l'héritage.


/* EDITER LES ELEMENTS HTML */
/*
Maintenant que nous avons vu comment accéder à un élément, nous allons voir comment l'éditer. Les éléments HTML sont souvent composés d'attributs (l'attribut href d'un <a> par exemple), et d'un contenu, qui est de type #text. Le contenu peut aussi être un autre élément HTML.
Comme dit précédemment, un élément HTML est un objet qui appartient à plusieurs objets, et de ce fait, qui hérite des propriétés et méthodes de ses objets parents.
*/

// LES ATTRIBUTS
// Via l'objet Element
/*
Pour interagir avec les attributs, l'obet Element nous fournit deux méthodes :
- getAttribute()
- setAttribute()
permettant respectivement de récupérer et d'éditer un attribut. Le premiet paramètre est le nom de l'attribut, et le deuxième, dans le cas de setAttribute() uniquement, est la nouvelle valeur à donner à l'attribut.
Petit exemple :
*/

/* <a id="myLink" href="http://www.un_lien_quelconque.com">Un lien modifié dynamiquement</a> */

var link = document.getElementById('myLink');
var href = link.getAttribute('href'); // On récupère l'attribut « href »

console.log(href);

link.setAttribute('href', 'http://www.siteduzero.com'); // On édite l'attribut « href »

/*
On commence par récupérer l'élément myLink, et on lit son attribut href via getAttribute(). ensuite, on modifie la valeur de l'attribut href avec setAttribute()/ Le lien pointe maintenant vers http://www.siteduzero.com
*/

// Les attributs accessibles
/*
En fait, pour la plupart des éléments courants comme <a>, il est possible d'accéder à un attribut via une propriété. Ainsi, si on veut modifier la destination d'un lien, on peut utiliser la propriété href, comme ceci :
*/

var link = document.getElementById('myLink');
var href = link.href;

console.log(href);

link.href = 'http://www.siteduzero.com';

/*
C'est cette façon de faire que l'on utilisera majoritairement pour les formulaires: pour récupérer ou modofier la valeur d'un champ, on utilisera la propriété value.
*/

// La classe

/*
On peut penser que pour modifier l'attribut class d'un élément HTML, il suffit d'utiliser element.class. Ce n'est pas possible car le mot-clé class est réservé en JavaScript, bien qu'il n'ait aucune utilité. A la place de class, il faudra utiliser className.
*/

// Stylisme de la div myColoredDiv :
document.getElementById('myColoredDiv').className = 'blue';

/*
Dans cet exemple, on définit la classe CSS .blue à l'élément myColoredDiv, ce qui fait que cet élément sera affiché avec un arrière-plan bleu et un texte blanc.
*/

/*
Faites attention : si votre élément comporte plusieurs classes (exemple : <a class = "external red u">) et que vous récupérez la classe avec className, cette propriété ne retournera pas un tableau avec les différentes classes mais bien la chaîne "external red u", ce qui n'est pas vraiment le comportement souhaité. Il vous faudra alors couper cette chaîne avec la méthode split() pour obtenir un tableau, comme ceci :
*/

var classes = document.getElementById('myLink').className;
var classesNew = [];
classes = classes.split(' ');

for (var i = 0, c = classes.length; i < c; i++) {
    if (classes[i]) {
        classesNew.push(classes[i]);
    }
}

console.log(classesNew);

/*
Ici on récupère les classes, on découpe la chaîne, mais comme il se peut que plusieurs espaces soient présents entre chaque nom de classe, on vérifie chaque élément pour voir s'il contient quelque chose (s'il n'est pas vide). On en profite pour créer un nouveau tableau classesNew, qui contiendra les noms des classes sans "parasites".

Si le support d'Internet Explorer avant sa version 10 vous importe peu, vous pouvez aussi vous tourner vers la propriété classList qui permet de consulter les classes sous forme d'un tableau et des les manipuler aisément :
*/

var div = document.querySelector('div');

// Ajoute une nouvelle classe
div.classList.add('new-class');

// Retire une classe
div.classList.remove('new-class');

// Retire une classe si elle est présente ou bien l'ajoute si elle est absente
div.classList.toggle('toggled-class');

// Indique si une classe est présente ou non
if (div.classList.contains('old-class')) {
    console.log('La classe .old-class est présente !');
}

// Parcourt et affiche les classes CSS
var result = '';

for (var i = 0; i < div.classList.length; i++) {
    result += '.' + div.classList[i] + '\n';
}

alert(result);

// Le contenu : innerHTML

/*
La propriété innerHTML est spéciale et demande une petite introduction. Elle a été crée par Microsoft pour les besoins d'Internet Explorer et a été normalisée au sein du HTML5. Bien que non normalisée pendant des années, elle est devenue un standard parce que tous les navigateurs la supportaient déjà, et non l'inverse comme c'est généralement le cas.
*/

// Récupérer du HTML
/*
innerHTML permet de récupérer le code HTML enfant d'un élément sous forme de texte. Ainsi, si des balises sont présentes, innerHTML les retournera sous forme de texte :
*/

var div = document.getElementById('myDiv');

console.log(div.innerHTML);

// ajouter ou éditer du HTML

/*
Pour éditer ou ajouter du contenu HTML, il suffit de faire l'inverse, c'est-à-dire de définir un nouveau contenu :
*/

document.getElementById('myDiv').innerHTML = '<blockquote> Je mets une citation à la place du paragraphe <blockquote>';

/*
Si vous voulez ajouter du contenu, et ne pas modifier le contenu déjà en place, il suffit d'utiliser += à la place de l'opérateur d'affectation :
*/

document.getElementById('myDiv').innerHTML += ' et <strong>une portion mise en emphase</strong>';

/*
toutefois, une petite mis en garde : il ne faut pas utiliser le += dans une boucle ! En effet, innerHTML ralentit considérablement l'exécution du code si l'on opère de cette manière, il vaut donc mieux concaténer son texte dans une variable pour ensuite ajouter le tout via innerHTML. Exemple :
*/

var text ='Salut n°1';


for (var i = 2, c = 10; i < c; i++) {
	text += ' salut n°' + i ; // On concatèe dans la variable "text"
}

var divItem = document.getElementById('item2');
divItem.innerHTML += text; // Une fois la concaténation terminée, on ajoute le tout à "element" via innerHTML


// innerText et textContent

/*
Penchons-nous maintenant sur deux propriétés analogues à innerHTML : innerText pour Internet Explorer et textContent pour les autres navigateurs.
*/

// innerText
/*
La propriété innerText a aussi été introduite dans Internet Explorer, mais à la différence de sa soeur innerHTML, elle n'a jamais été standardisée et n'est pas supportée par tous les navigateurs. Internet Explorer pour toute version antérieure à la neuvième ne supporte que cette propriété et non pas la version standardisée que nous verrons par la suite.
Le fonctionnement d'innerText est le même qu'innerHTML excepté le fait  que seul le texte est récupéré, et non les balises. C'est pratique pour récupérer du contenu sans le balisage, petit exemple :
*/

var div = document.getElementById('myDiv');
console.log(div.innerText);

// textContent

/*
La propriété textContent est la version standardisée d'innerText, elle est reconnue par tous les navigateurs à l'exception des versions d'Internet Explorer antérieurs à la 9. Le fonctionnement est évidemment le même. Maintenant une question se pose : comment faire un script qui fonctionne à la fois pour Internet Explorer et les autres navigateurs ? c'est ce que nous allons voir !
*/

// Tester le navigateur

/*
Il est possible via une simple condition de tester si le navigateur prend en charge telle ou telle méthode ou propriété.
*/

var div = document.getElementById('myDiv2'),
    txt = '';

if (div.textContent) { // "textContent" existe ? Alors on s'en sert !
    txt = div.textContent;
} else if (div.innerText) { // "innerText" existe ? Alors on doit être sous IE.
    txt = div.innerText + ' [via Internet Explorer]';
} else { // Si aucun des deux n'existe, cela est sûrement dû au fait qu'il n'y a pas de texte
    txt = ''; // On met une chaîne de caractères vide
}

console.log(txt);


var div = document.getElementById('myDiv2'),
    txt2 = '';

txt2 = div.textContent || div.innerText || '';

console.log(txt2)
















