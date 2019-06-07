var output = document.getElementById('output'), items;

if (output) {
    items = output.getElementsByTagName('li');

    for (var i=0, c=items.length; i<c; i++) {
        items[i].onclick = function() {
            var originalText = this.innerHTML;
            var newText      = prompt("Modifiez le texte", originalText);

            if (newText) { // Si l'utilisateur n'a pas fait 'Annuler', alors on modifie
                this.innerHTML = newText;
            }
        };
    }
}