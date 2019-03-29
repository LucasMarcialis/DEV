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
alert.('Hello world!');
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