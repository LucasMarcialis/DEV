var mainDiv = document.createElement('div');
mainDiv.id = 'divTP3';

var languages = [{
    t: 'JavaScript',
    d: 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'
}, {
    t: 'JScript',
    d: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
}, {
    t: 'ActionScript',
    d: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'
}, {
    t: 'EX4',
    d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
}];

// On créé le paragraphe :
var paragraph = document.createElement('p');
var paragraphText = document.createTextNode('Langages basés sur ECMAScript :');
paragraph.appendChild(paragraphText);

var defList = document.createElement('dl'),
    defTerm, defTermText,
    defDefn, defDefnText;

for (var i = 0, c = languages.length; i < c; i++) {
    defTerm = document.createElement('dt');
    defDefn = document.createElement('dd');
    
    defTermText = document.createTextNode(languages[i].t);
    defDefnText = document.createTextNode(languages[i].d);
    
    defTerm.appendChild(defTermText);
    defDefn.appendChild(defDefnText);
    
    defList.appendChild(defTerm);
    defList.appendChild(defDefn);
}

mainDiv.appendChild(paragraph);
mainDiv.appendChild(defList);

document.body.appendChild(mainDiv);