var mainDiv = document.createElement('div');
mainDiv.id = 'divTP2';

var textNodes = [
	document.createTextNode('Langages basés sur ECMAScript :'),
    document.createTextNode('JavaScript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4'),
];

var paragraph = document.createElement('p');
paragraph.appendChild(textNodes[0]);

var uList = document.createElement('ul');

for( var i = 1, c = textNodes.length; i < c; i++) {
	var uItem = document.createElement('li');
	uItem.appendChild(textNodes[i]);
	uList.appendChild(uItem);
}

mainDiv.appendChild(paragraph);
mainDiv.appendChild(uList);

document.body.appendChild(mainDiv);