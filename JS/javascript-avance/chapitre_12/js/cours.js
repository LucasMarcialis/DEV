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
Si nous attribuons une fonction à l'événement click de chacun de ces deux éléments (div et span avec Du texte !), quel événement va se déclencher en premier à votre avis ?
Si vous décider d'utiliser la capture, alors l'événement du <div> se déclenchera en premier puis viendra ensuite l'événement du <span>. En revanche, si vous utilisez le bouillonnement, ce sera d'abord l'événement du <span> puis celui du <div>.
La phase de bouillonnement est définie par défaut.
*/

// L'OBJET EVENT

/*
L'objet Event sert à fournir une multitude d'informations sur l'événement actuellement déclenché. Par exemple, vous pouvez récupérer quelles sont les touches actuellement enfoncées, les coordonnées du curseur, l'élément qui a éclenché l'événement.
Cet objet est bien particulier dans le sens où il n'est accessible que lorsqu'un événement est déclenché. Son accès ne peut se faire que dans une fonction exécutée par un événement, cela se fait de la manière suivante avec le DOM-0.
*/

element.onclick = function(e) { // L'argument « e » va récupérer une référence vers l'objet « Event »
    alert(e.type); // Ceci affiche le type de l'événement (click, mouseover, etc.)
};

// Et de cette manière là avec le DOM-2

element.addEventListener('click', function(e) { // L'argument « e » va récupérer une référence vers l'objet « Event »
    alert(e.type); // Ceci affiche le type de l'événement (click, mouseover, etc.)
});

/*
Il est important de préciser que l'oijet Event peut se récupérer dans un argument autre que e. Après tout, l'objet Event est tout simplement passé en référence à l'argument de votre fonction, ce qui vous permet de choisir le nom que vous souhaitez
*/
/*
La propriété type permet de savoir quel type d'événement s'est déclenché.
L'une des propriétés les plus importantes de notre objet se nomme target. Celle-ci permet de récupérer une référence vers l'élément dont l'événement a été déclenché -comme le this pour les événements sans le DOM ou avec DOM-0), ainsi, vous pouvez très bien modifier le contenu d'un élément qui a été cliqué .
*/

// Récupérer l'élément à l'origine du déclenchement de l'événement
/*
Certains événements appliqués à un élément parent peuvent se propager d'eux-mêmes aux éléments enfants : c'est le cas des événements mouseover, mouseout, mousemove, click... ainsi que d'autres événements moins utilisés.
En testant l'exemple parent, enfant 1 et enfant 2, vous avez surement remarqué que la propriété target renvoyait toujours l'élément déclencheur de l'événement, or nous souhaitons obtenir l'élément sur lequel a été appliqué l'événement. Autrement dit, on veut connaître l'élément à l'origine de cet événement, et non pas ses enfants. 
Pour ce faire, il suffit d'utiliser currentTarget au lieu de target.
*/

// Récupérer la position du curseur

/*
La position du curseur est une information très importante, beaucoup de monde s'en sert pour de nombreux scripts comme le drag & drop.
Généralement, on récupère la position du curseur par rapport au coin supérieur gauche de la page Web. cela dit, il est aussi possible de récupérer sa position par rapportau coin supérieur gauche de l'écran.
Dans ce tutoriel, nous allons nous limiter à la page Web.
Pour récupérer la position de notre curseur, il existe deux propriétés : clientX pour la position horizontale et clientY pour la position verticale. Etant donné que la position du curseur change à chaque déplacement de la souris, il est logique de dire que l'événement le plus adapté à la majorité des cas est mousemove.
*/

// Récupérer les touches frappées par l'utilisateur

/*
La récupération des touches frappées se fait par le biais de trois événements différents. Dit comme ça, cela laisse sur un sentiment de complexité, mais vous allez voir qu'au final tout est beaucoup plus simple qu'il n'y parait.
Les événements keyup et keydown sont conçus pour capter toutes les frappes de touches. keyup se déclenche lorsque vous relâchez une touche, tandis que keydown se déclenche au moment de l'appui sur la touche (comme mousedown).
Toutes les touches retournant un caractère retourneront un caractère majuscule, que la touche Maj soit pressée ou non.
*/
/*
L'événement keypress, lui est d'une toute autre utilité : il sert uniquement à capter les touches qui écrivent un caractère, oubliez donc les CTRL, ALT et autres touches de ce genre qui n'affichent pas de caractère. Alors, forcémenent, vous vous demandez probablement à quoi peut bien servir cet événement au final ? Eh bien son avantage réside dans sa capacité à détecter les combinaisons de touches ! Ainsi, si vous faites la combinaison MAJ + A, l'événement keypress détectera bien un A majuscule là où les événéments keyup et keydown se déclencheront deux fois, une fois pour la touche Maj et une deuxième fois pour la touche A.
Si nous devions énumérer toutes les propriétés capables de vous fournir une valeur, il y an euarit trois : keyCode, charCode et which. Ces propriétés renvoient chacune un code ASCII correspondant à la touche pressée.
Cependant, la propriété keyCode est amplement suffisante dans tous les cas comme dans l'exemple dans le cours HTML.

Il n'existe une seule méthode pour obtenir non pas un code mais le caractère, c'est la méthode fromCharCode().
Exemple :
*/

console.log(String.fromCharCode(84, 101, 115, 116)); // Affiche : Test)

// Bloquer l'action par défaut de certains événements

/*
Il est possible de bloquer l'action par défaut de certains événements, comme la redirection d'un lien vers une page Web. Sans le DOM-2, cette opération était très simple vu qu'il suffisait d'écrire return false. Avec l'objet Event, c'est quasiment tout aussi simple vu qu'il suffit juste d'appeler la méthode preventDefault().
*/


// RESOUDRE LES PROBLEMES D'HERITAGE DES EVENEMENTS

// Le problème
/*
Certains événements appliqués  un élément parent peuvent se propager d'eux-mêmes aux éléments enfants, c'est le cas des événements mouseover, mouseout, mousemove, click... ainsi que d'autres événements moins utilisés.

Voici notre problème : les enfants héritent ds propriétés des événements susnommés appliqués aux éléments parents. Ainsi, lorsque vous déplacez votre curseur depuis le <div< #myDiv jusqu'à un <div> enfant, vous allez déclencher l'événement mouseout sur #myDiv et l'événement mouseover sur le <div> enfant.

*/

/*
Nous avons deux cas de figure :

 - Dans le cas de l'événement mouseover, nous devons détecter la provenance du curseur. Si le curseur vient d'un enfant de #myDiv, alors le code de l'événement ne devra pas être exécuté. S'il provient d'un élément extérieur à #myDiv, alors l'exécution du code peut s'effectuer.

 - Dans le cas de mouseout, le principe est similaire, si ce n'est que là nous devons détecter la destination du curseur. dans le cas où la destination du curseur est un enfant de #myDiv, alors le code de l'événement n'est pas exécuté, sinon il s'exécutera sans problème.
*/
/*
Commençons avec mouseover.
Il nous faut savoir si l'élément en question est un enfant direct de myDiv ou non. La solution consiste à remonter tout le long de ses éléments parents jusqu'à tomber soit sur myDiv, soit sur l'élément <body> qui désigne l'élément HTML le plus haut dans notre document. Il va donc nous falloir une boucle while.

Il nous duffit alors d'insérer une condition qui exécutera le code de notre événement uniquement dans le cas où la variable relatedTarget ne pointe pas sur l'élément myDiv.

Attention à un point, la balise body ne couvre pas forcément la page Web complète de votre navigateur, ce qui fait que votre curseur peut provenir d'un élément situé encore plus haut que la balise body. Cet élément correspond à la balise html soit l'élément document en JavaScript. Il nous faut donc faire une petite modification afin de bien préciser que si le curseur provient de document il ne peut forcément pas mprovenir de myDiv.

Pour mouseout, l'événement est basiquement le même code que pour mouseover à la différence du texte à afficher et d'utiliser mousoute à la place de mouseover
*/

var myDiv = document.getElementById('myDiv'),
    results4 = document.getElementById('results4');

myDiv.addEventListener('mouseover', function(e) {

    var relatedTarget = e.relatedTarget;

    while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
        relatedTarget = relatedTarget.parentNode;
    }

    if (relatedTarget != myDiv) {
        results4.innerHTML += "Le curseur vient d'entrer.";
    }

});

myDiv.addEventListener('mouseout', function(e) {

    var relatedTarget = e.relatedTarget;

    while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
        relatedTarget = relatedTarget.parentNode;
    }

    if (relatedTarget != myDiv) {
        results4.innerHTML += "Le curseur vient de sortir.<br />";
    }

});

// En résumé

/*
- Les événements sont utilisés pour appeler une fonction à partir d'une action produite ou non par l'utilisateur.
- Différents événements existent pour détecter certaines actions comme le clic, le survol, la frappe au clavier et le contrôle des champs de formulaires
- Le DOM-0 est l'ancienne manière de capturer les événements. Le DOM62 introduit l'objet Event et la fameuse méthode addEventListener()
- L'objet Event permet de récolter toutes sortes d'informations se rapportant à l'événement déclenché : son type, depuis quel élément il a été déclenché, la position du curseur, les touches frappées... Il est aussi possible de bloquer l'action d'un événement avec preventDefault()
- Parfois un événement appliqué sur un parent se propage à ses enfants. Cet héritage des événements peut provoquer des comportements inattendus.
*/