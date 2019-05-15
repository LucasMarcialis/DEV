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
/* Le JavaScript voit les éléments HTML comme étant des objets, cela veut donc dire que chaque élément HTML possède des propriétés et des méthodes. Cependant faites bien attention prace que tous ne possèdent pas les mêmes propriétés et méthodes. Certaines sont néanmoins communes à tous les éléments HTML, car tous les éléments HTML sont d'un même type : le type Node, qui signifie noeud en anglais.
