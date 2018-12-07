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

function ajouterLien (lien) {
    // Création des variables nécessaires
    var divElt = document.createElement("div");
    var aElt = document.createElement("a");
    var spanUrlElt = document.createElement("span");
    var spanAuteurElt = document.createElement("span");
    var pElt = document.createElement("p");
                   
    // Définition des informations des éléments
    divElt.setAttribute("class","lien");
    
    aElt.href = lien.url;
    aElt.textContent = lien.titre;
    aElt.style.color = "#428bca";
    aElt.style.textDecoration = "none";
    aElt.style.fontWeight = "bold";

    spanUrlElt.textContent = " " + lien.url;

    pElt.classList.add("paragraphe");
    pElt.style = "margin: 0px";

    spanAuteurElt.textContent = "Ajouté par " + lien.auteur;

    // Insertion des éléments)
    divElt.appendChild(aElt);
    divElt.appendChild(spanUrlElt);
    divElt.appendChild(pElt);
    pElt.appendChild(spanAuteurElt);
    document.getElementById("contenu").appendChild(divElt);    
}

listeLiens.forEach(function (lien) {
    ajouterLien(lien);
}) ;

var ajouterElt = document.getElementById("ajout");
var formulaireElt = document.getElementById("formulaire")
ajouterElt.addEventListener("click", function (e) {
    ajouterElt.style = "display: none";
    formulaireElt.style = "display: block";
});

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    var auteurElt = formElt.elements.auteur.value;
    var titreElt = formElt.elements.titre.value;
    var urlElt = formElt.elements.url.value;
    var article = {titre: titreElt, url: urlElt, auteur: auteurElt};
    ajouterLien(article);
    e.preventDefault();
});