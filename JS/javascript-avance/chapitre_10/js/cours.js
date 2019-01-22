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