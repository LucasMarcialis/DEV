/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var titreElt = document.createElement("span");
var lienTitreElt = document.createElement("a");
var parElt = document.createElement("p");

for(i = 0; i< listeLiens.length; i++) {
    lienTitreElt.href = listeLiens[i].url;
    lienTitreElt.textContent = listeLiens[i].titre;
    titreElt.appendChild(lienTitreElt);
    parElt.appendChild(lienTitreElt);
    parElt.innerHTML += listeLiens[i].url;
    parElt.innerHTML += "<br />" + listeLiens[i].auteur;
    document.getElementById("contenu").appendChild(parElt);
}