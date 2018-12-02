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

listeLiens.forEach(function (lien) {
    // Création des variables nécessaires
    var divElt = document.createElement("div");
    var aElt = document.createElement("a");
    var spanUrlElt = document.createElement("span");
    var spanAuteurElt = document.createElement("span");
    var pElt = document.createElement("p");
                   
    // Définition des informations des éléments
    divElt.setAttribute("class", "lien");
    
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
        
}) 

var ajouterElt = document.getElementById("ajout");

var formElt = document.querySelector("form");
formElt.style = "margin-bottom: 10px"

var auteurElt = document.createElement("input");
auteurElt.id = "auteur";
// auteurElt.value = "Entrez votre nom";

var titreElt = document.createElement("input");
titreElt.id = "titre";
// titreElt.value = "Entrez le titre du lien";

var urlElt = document.createElement("input");
urlElt.id = "url";
// urlElt.value = "Entrez l'URL du lien";

var validerElt = document.createElement("input");
validerElt.type = "submit";
validerElt.value = "Ajouter";

ajouterElt.addEventListener("click", function () {
    formElt.innerHTML="";
    formElt.appendChild(auteurElt);
    formElt.appendChild(titreElt);
    formElt.appendChild(urlElt);    
    formElt.appendChild(validerElt);
});

form.addEventListener("submit", function (e) {
    var auteur = form.elements.auteur.value;
    var titre = form.elements.titre.value;
    var url = form.elements.url.value;
    if ((auteur === "") || (titre === "") || (url === "")) {
        e.preventDefault;
    }
})

validerElt.addEventListener("click", function (e) {
    
})

/*
La saisie des champs Titre, URL et Auteur du lien est obligatoire.
Si l’URL saisie ne commence ni par “http://” ni par “https://”, on lui ajoute “http://” au début.
Lorsque l’utilisateur valide le nouveau lien, celui-ci est ajouté en haut de la page, le formulaire d’ajout disparaît et un message d’information s’affiche pendant 2 secondes.
*/