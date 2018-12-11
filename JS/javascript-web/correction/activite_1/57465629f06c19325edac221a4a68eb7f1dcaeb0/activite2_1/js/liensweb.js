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

var containElts = document.createElement("div");

listeLiens.forEach(function (lien) {
    var liensElts = document.createElement("div");
    liensElts.classList.add("lien");
    
    var titreElt = document.createElement("h2");
    titreElt.style.margin = "0px";
    titreElt.style.display = "inline";
    titreElt.style.fontSize = "100%";
    
    var titreLienElt = document.createElement("a");
    titreLienElt.textContent = lien.titre;
    titreLienElt.href = lien.url;
    titreLienElt.style.textDecoration = "none";  
    titreLienElt.style.color = "#428bca";
    
    var urlElt = document.createElement("span");
    urlElt.textContent = lien.url;
    urlElt.style.paddingLeft = "10px";
    
    var auteurElt = document.createElement("span");
    auteurElt.textContent = "Ajouté par " + lien.auteur;
    auteurElt.style.display = "block";
    
    liensElts.appendChild(titreElt);
    titreElt.appendChild(titreLienElt);
    liensElts.appendChild(urlElt);
    liensElts.appendChild(auteurElt);
    containElts.appendChild(liensElts);
});

document.getElementById("contenu").appendChild(containElts); 

