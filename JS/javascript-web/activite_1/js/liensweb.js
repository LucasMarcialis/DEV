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

var titreElt = document.createElement("div");
var lienTitreElt = document.createElement("a");
lienTitreElt.style.color = "#428bca";
lienTitreElt.style.textDecoration = "none";
lienTitreElt.style.fontWeight = "bold";
var urlElt = document.createElement("span");
var auteurElt = document.createElement("span");

for (i = 0; i < listeLiens.length; i++) {
    var divElt = document.createElement("div");
    divElt.classList.add("lien");
    
    lienTitreElt.href = listeLiens[i].url;
    lienTitreElt.textContent = listeLiens[i].titre;

    titreElt.appendChild(lienTitreElt);
    divElt.appendChild(lienTitreElt);
    
    urlElt.textContent = " " + listeLiens[i].url;
    divElt.appendChild(urlElt);
    
    divElt.innerHTML += "<br />";
    
    auteurElt.textContent = "Ajouté par " + listeLiens[i].auteur;
    divElt.appendChild(auteurElt);

    divElt.innerHTML += " ";
    document.getElementById("contenu").appendChild(divElt);
}