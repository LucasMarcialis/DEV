var mainDiv = document.createElement('div');
mainDiv.id = 'divTP4';

var mainForm = document.createElement('form');
var fieldSet = document.createElement('fieldset');
var legendTag = document.createElement('legend');
var secondDiv = document.createElement('div');
var firstLabel = document.createElement('label');
var inputTag = document.createElement('input');
var firstBr = document.createElement('br');
var secondBr = document.createElement('br');
var secondInput = document.createElement('input');

var textNodes = [
    document.createTextNode('Uploader une image'),
    document.createTextNode('Image à uploader : ')
]

mainForm.enctype = 'multipart/form-data';
mainForm.method = 'post';
mainForm.action = 'upload.php';

legendTag.appendChild(textNodes[0]);

secondDiv.style = 'text-align: center';

firstLabel.htmlFor = 'inputUpload';
firstLabel.appendChild(textNodes[1]);

inputTag.type = 'file';
inputTag.name = 'inputUpload';
inputTag.id = 'inputUpload';

secondInput.type = 'submit';
secondInput.value = 'Envoyer';

secondDiv.appendChild(firstLabel);
secondDiv.appendChild(inputTag);
secondDiv.appendChild(firstBr);
secondDiv.appendChild(secondBr);
secondDiv.appendChild(secondInput);
fieldSet.appendChild(legendTag);
fieldSet.appendChild(secondDiv);
mainForm.appendChild(fieldSet);
mainDiv.appendChild(mainForm);
document.body.appendChild(mainDiv);


// CORRECTION

// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP4';

// Création de la structure du formulaire
var form = document.createElement('form');
var fieldset = document.createElement('fieldset');
var legend = document.createElement('legend'),
    legendText = document.createTextNode('Uploader une image');
var center = document.createElement('div');

form.action = 'upload.php';
form.enctype = 'multipart/form-data';
form.method = 'post';

center.setAttribute('style', 'text-align: center');

legend.appendChild(legendText);

fieldset.appendChild(legend);
fieldset.appendChild(center);

form.appendChild(fieldset);

// Création des champs
var label = document.createElement('label'),
    labelText = document.createTextNode('Image à uploader :');
var input = document.createElement('input');
var br = document.createElement('br');
var submit = document.createElement('input');

input.type = 'file';
input.id = 'inputUpload';
input.name = input.id;

submit.type = 'submit';
submit.value = 'Envoyer';

label.htmlFor = 'inputUpload';
label.appendChild(labelText);

center.appendChild(label);
center.appendChild(input);
center.appendChild(br);
center.appendChild(br.cloneNode(false)); // On clone, pour mettre un deuxième <br />
center.appendChild(submit);

// On insère le formulaire dans mainDiv
mainDiv.appendChild(form);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);