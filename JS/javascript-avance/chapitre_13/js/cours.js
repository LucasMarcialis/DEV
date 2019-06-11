// LES FORMULAIRES

// Les propriétés

/*
Il est possible d'accéder à n'importe quelle propriété d'un élément HTML, il en va donc de même pour les propriétés spécifiques aux éléments d'un formulaire comme :
- value
- disabled
- checked
*/

// value
/*
value permet de définir une valeur pour différents éléments d'unnformulaire comme les <input>, les <button> etc. On lui assigne une valeur (chaîne de caractères ou un nombre) et elle est immédiatement affichée sur votre élément HTML.

Cette propriété s'utilise aussi avec un élément <textarea>! En effet, en HTML, on prend souvent l'habitude de mettre du texte dans un <textarea> en écrivant <textarea>Et voilà du texte !</textarea>.
Du coup, en JavaScript, on est souvent tenté d'utiliser innerHTML pour récupérer le contenu de notre <textarea>, cependant cela ne fonctionne pas, il faut bien utiliser value à la place !
*/

// Les booléens avec disabled, checked et readonly
/*
Contrairement à la propriété value, les trois propriétés disabled, checked et readonly ne s'utilisent pas de la m^peme manière qu'en HTML où il vous suffit d'écrire, par exemple <input type="text" disabled = "disabled" /> pour désactiver un champ de texte. En JavaScript, ces trois propriétés deviennent booléennes.
	
	Pour disabled, suffit d'écrire : element.disabled = true/false pour fixer la valeur de la propriété

	Pour checked, il faut procéder de la même manière sauf pour un bouton radio. Chaque bouton radio coché se verra attribuer la valeur true à sa propriété checked, il va donc nous falloir utiliser une boucle for pour vérifier quel bouton radio a été sélectionné.

/*