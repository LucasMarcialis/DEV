// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for(i = 0; i < journaux.length; i++) {
    var listeElt = document.createElement("li");
    var lienElt = document.createElement("a");
    lienElt.href = journaux[i];
    lienElt.textContent = journaux[i];
    listeElt.appendChild(lienElt);
    document.getElementById("contenu").appendChild(listeElt);
}