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

//for (i = 0; i < listeLiens.length; i++) {
    //Titre avec lien et sa couleur

   // var paragraphe = document.createElement("p");
   // var titreLien = document.createElement("a");
   // var urlTextuel = document.createElement("span");
   // var auteur = document.createElement("span");
   // var titreStrong = document.createElement("strong");

   // paragraphe.className = "lien";
   // document.getElementById("contenu").appendChild(paragraphe);

   // titreLien.href = listeLiens[i].url;
   // titreLien.textContent = listeLiens[i].titre + " ";
   // titreLien.style.color = "#428bca";

    //Element contenant juste l'URL textuellement

   // urlTextuel.textContent = listeLiens[i].url;

    //Element contenant l'ajout de l'auteur

   // auteur.textContent = "Ajouté par " + listeLiens[i].auteur;
    
   // titreStrong.appendChild(titreLien);
   // paragraphe.appendChild(titreStrong);
   // paragraphe.appendChild(urlTextuel);
   // paragraphe.appendChild(document.createElement("br"));
    //paragraphe.appendChild(auteur);

    
//}


// Méthode avec listeLiens foreach

listeLiens.forEach(function (lien) {
    var paragraphe = document.createElement("p");
    var titreLien = document.createElement("a");
    var urlTextuel = document.createElement("span");
    var auteur = document.createElement("span");
    var titreStrong = document.createElement("strong");

    paragraphe.className = "lien";
    document.getElementById("contenu").appendChild(paragraphe);

    titreLien.href = lien.url;
    titreLien.textContent = lien.titre + " ";
    titreLien.style.color = "#428bca";

    urlTextuel.textContent = lien.url;

    auteur.textContent = "Ajouté par " + lien.auteur;

    titreStrong.appendChild(titreLien);
    paragraphe.appendChild(titreStrong);
    paragraphe.appendChild(urlTextuel);
    paragraphe.appendChild(document.createElement("br"));
    paragraphe.appendChild(auteur);

})