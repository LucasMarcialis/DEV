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