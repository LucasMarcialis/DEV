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