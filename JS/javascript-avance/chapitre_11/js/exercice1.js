var noeudParent = document.createElement('div');
noeudParent.id = 'divTP1correction';

document.body.appendChild(noeudParent);

var noeud1 = document.createTextNode('Le ');
noeudParent.appendChild(noeud1);

var noeud2 = document.createElement('strong');
var noeud2Text = document.createTextNode('World Wide Web Consortium');
noeud2.appendChild(noeud2Text);
noeudParent.appendChild(noeud2);

var noeud3 = document.createTextNode(', abrégé par le sigle ');
noeudParent.appendChild(noeud3);

var noeud4 = noeud2.cloneNode(false);
var noeud4Text = document.createTextNode('W3C');
noeud4.appendChild(noeud4Text);
noeudParent.appendChild(noeud4);
console.log(noeud4);

var noeud5 = document.createTextNode(' , est un ');
noeudParent.appendChild(noeud5);

var noeud6 = document.createElement('a');
noeud6.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
noeud6.title = 'Organisme de normalisation'
noeud6Text = document.createTextNode('organisme de standardisation');
noeud6.appendChild(noeud6Text);
noeudParent.appendChild(noeud6);

noeud7 = document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du ');
noeudParent.appendChild(noeud7);

noeud8 = noeud6.cloneNode(false);
noeud8.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
noeud8.title = 'World Wide Web';
noeud8Text = document.createTextNode('World Wide Web');
noeud8.appendChild(noeud8Text);
noeudParent.appendChild(noeud8);


// Corrigé 

// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP1';

// On crée tous les nœuds textuels, pour plus de facilité
var textNodes = [
    document.createTextNode('Le '),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('organisme de standardisation'),
    document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '),
    document.createTextNode('World Wide Web'),
    document.createTextNode('.')
];

// On crée les deux <strong> et les deux <a>
var w3cStrong1 = document.createElement('strong');
var w3cStrong2 = document.createElement('strong');

w3cStrong1.appendChild(textNodes[1]);
w3cStrong2.appendChild(textNodes[3]);

var orgLink = document.createElement('a');
var wwwLink = document.createElement('a');

orgLink.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
orgLink.title = 'Organisme de normalisation';
orgLink.appendChild(textNodes[5]);

wwwLink.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLink.title = 'World Wide Web';
wwwLink.appendChild(textNodes[7]);

// On insère le tout dans mainDiv
mainDiv.appendChild(textNodes[0]);
mainDiv.appendChild(w3cStrong1);
mainDiv.appendChild(textNodes[2]);
mainDiv.appendChild(w3cStrong2);
mainDiv.appendChild(textNodes[4]);
mainDiv.appendChild(orgLink);
mainDiv.appendChild(textNodes[6]);
mainDiv.appendChild(wwwLink);
mainDiv.appendChild(textNodes[8]);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);

/*
Par mesure de facilité, tous les noeuds textuels sont contenus dans le tableau textNodes, ça évite de faire 250 variables différentes. Une fois les noeuds tetuels créés, on crée les éléments <a> et <strong>. Une fois que tout cela est fait, on insère le tout, un élément après l'autre dans le <div> conteneur.
*/