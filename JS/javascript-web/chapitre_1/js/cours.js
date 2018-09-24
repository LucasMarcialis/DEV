var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);


// Deux types de noeuds : élément (balise HTML) > ELEMENT_NODE
// ou textuel: TEXT_NODE
// Seul les ELEMENT_NODE peuvent avoir des childNodes
if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);

// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    if (document.body.childNodes[i].nodeType === document.ELEMENT_NODE) {
        console.log(document.body.childNodes[i]);
    }
}


var h1  = document.body.childNodes[1];
console.log(h1.parentNode);

console.log(document.parentNode);