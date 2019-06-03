/* LES EVENEMENTS */

// Que sont les événements ?
/*
Les événements permettent de déclencher une fonction selon qu'une actio  s'est produite ou non. Par exemple, on peut faire apparaître une fenêtre alert() lorsque l'utilisateur survole une zone d'une page web.
"Zone" est un terme un peu vague, il vaut mieux parler d'éléùment (HTML dans la plupart des cas). Ainsi, vous pouvez très bien ajouter un événement à un élément de votre page Web (par exemple, une balise <div>) pour faire en sorte de déclencher un code JavaScript lorsque l'utilsateur fera une aciton sur l'élément en question.
*/

// La théorie
// Liste des événements
/*
click > cliquer (appuyer plus relâcher) sur l'élément
dbclick > Double-cliqyuer sur l'élément
mouseover > Faire entrer le curseur sur l'élément
mouseout > Faire sortir de curseur de l'élément
mousedown > Appuyer (sans relâcher) sur le bouton gauche de la souris sur l'élément
mouseup > Relâcher le bouton gauche de la souris sur l'élément
mousemove > Faire déplacer le curseur sur l'élément
keydown > Appuyer (sans relâcher) sur une touche de clavier sur l'élément
keyup > Relâcher une touche de clavier sur l'élément
keypress > Frapper (appuyer puis relâcher) une touche de clavier sur l'élément
focus > "Cibler " l'élément
blur > Annuler le "ciblage" de l'élément
change > Changer la valeur d'un élément spécifique aux formulaires (input, checkbox, etc.)
input > Taper un caractère dans un champ de texte
select > Sélectionner le contenu d'un champ de texte (input, textarea, etc.)
*/
/*
Il a été dit précédemment que les événements mousedown et mouseup se déclenchaient avec le bouton gauche de la souris. Ceci n'est pas tout à fait exact, ces deux événements peuvent se déclencher avec d'autres boutons de la sourics ocmme le clic de la molette ou le bouton droit. Cependant, cela ne foncitonne pas avec tous les navigateurs comme Firefox qui a choisi de loquer cette possibilité. L'utilisateion de ces deux événemlents se limite donc généralement au bouton gauche de la souris.
*/
/*
toutefois, ce n'est pas tout, il existe aussi deux événements spécifiques à l'élément <form> que voici :

submit > Envoyer le formulaire
reset > Réinitialiser le formulaire

*/

// La pratique
/*
En cliquant sur la balise span du cours HTML, l'événement onclick est bien déclenché ce qui ouvre la fenêtre d'alerte avec "Hello"
*/

// Le mot-clé this
/*
En cliquant sur le deuxième span, l'événement est déclenché et le contenu HTML de l'élément sur lequel on a cliqué s'affiche dans une fenêtre d'alerte. This contient donc l'objet sur lequle on a cliqué.
*/

// Retour sur le focus
/*
En cliquant sur l'input, celui-ci possède le focus : il exécute l'événement et affiche un texte différent vous demandant d'appuyer sur votre touche de tabulation. L'appui sur cette touche permet de faire passer le focus à l'élément suivant.
*/

// Bloquer l'action par défaut de certains événements
/*
Si l'on essaie d'appliquer un événement click sur un lien, cela pose un problème (voir premier a).
Il faut alors ajouter le code return false sur notre événement click (voir second a). return false sert à bloquer l'action par défaut de l'événement qui le déclenche.
return true permet de faire fonctionner l'événement comme si de rien n'était.
*/
/*
Pour insérer du javascript dans un lien il suffit de faire comme le troisième a : on remplace le lien par un # et on met notre code javascript dans l'événement approprié (click). On ajoute un return false car le dièse redirige tout en haut de la page Web ce qui n'est pas ce que l'on souhaite. On bloque cette redirection avec return false.

L'utilisation de javascript dans un lien est prohibée.

L'utilisation d'un lient uniquement pour le déclenchement d'un événement click n'est pas une bonne chose, préférez plutôt l'utilisation d'une balise <button> à laquelle vous aurez retiré le style CSS. La balise <a> est elle conçue pour rediriger vers une page Web et non pas pour servir exclusivement de déclencheur !
*/


// LES EVENEMENTS AU TRAVERS DU DOMs

// Le DOM-0

/*
Grâce au DOM, on récupère l'élément HTML dont l'ID est clickme, on accède ensuite à la propriété oneclick à laquelle on assigne une fonction anonyme dans laquelle on fait appel à la fonction alert() avec un texte en paramètre.

Pour supprimer un événement avec le DOM-0, il suffit de lui attribuer une fonction anonyme vide :
*/
element.onclick = function() {};


// Le DOM-2
/*
Le DOM-2 permet la création multiple d'un même évenement et gère aussi l'objet Event.
Nous utilisons désormais une méthode nommée addEventListener() qui prend trois paramètres :
- Le nom de l'événement
- La fonction à exécuter
- Un booléen optionnel pour spécifier si l'on souhaite utiliser la phase de capture ou bien celle de bouillonnement.
La première ligne contient l'appel à la méthode addEventListener(), le première paramètre et l'initialisation de la fonction anonyme pour le deuxième paramètre.
La deuxième ligne contient le code de la fonction anonyme
La troisième ligne contient l'accolade fermante de la fonction anonyme puis le troisième paramètre
Ce code revient à écrire le code suivant de façon plus rapide :
*/
var element = document.getElementById('clickme2');

var myFunction = function() {
    alert("Vous m'avez cliqué !");
};

element.addEventListener('click', myFunction);

/*
Le DOM-2 permet la création multiple d'événements identiques pour un même élément (cf exemple clickme3)
*/
/*
Pour supprimer un événement, il faut utiliser la méthode removeEventListener :
*/
element.addEventListener('click', myFunction); // On crée l'événement

element.removeEventListener('click', myFunction); // On supprime l'événement en lui repassant les mêmes paramètres

// Les phases de capture et de bouillonnement
/*
Lors de l'exécution d'un événement, il y a deux phases distinctes :
- La capture s'exécute avant le déclenchement de l'événement
- Le bouillonnement s'exécute après que l'événement ait été déclenché.
Toutes deux permettent de définir le sens de propagation des événements.
*/
/*
La propagation d'un événement décide le sens dans lequel l'événement va se déclencher.
*/