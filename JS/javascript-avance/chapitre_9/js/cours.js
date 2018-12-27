var divs = document.getElementsByTagName('div');

for (var i = 0, c = divs.length ; i < c ; i++) {
    console.log('Element n° ' + (i + 1) + ' : ' + divs[i]);
}

var link = document.getElementById('myLink');
var href = link.href; // On récupère l'attribut « href »

console.log(href);

link.href = 'https://openclassrooms.com'; // On édite l'attribut « href »