var noeudparent = document.createElement('div');
noeudparent.id = 'divTP1correction';

document.body.appendChild(noeudparent);

var noeud1 = document.createTextNode('Le ');
noeudparent.appendChild(noeud1);

var noeud2 = document.createElement('strong');
noeud2Text = document.createTextNode('World Wide Web Consortium');
noeud2.appendChild(noeud2Text);
noeudparent.appendChild(noeud2);