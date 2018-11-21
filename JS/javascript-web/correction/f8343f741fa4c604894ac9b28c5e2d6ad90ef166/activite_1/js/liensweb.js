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

// Pour chaque lien, on fait la même chose
listeLiens.forEach(function(element) {
	// Element de la liste ----------------------------------
	var lien = document.createElement("div");
	lien.classList.add("lien");
	// ------------------------------------------------------
	
	// Ligne du titre ---------------------------------------
	var ligne1 = document.createElement("span");
	ligne1.style.display = "block";
	
	// Lien dans le titre
	var titreLien = document.createElement("a");
	titreLien.style.color = "#428bca";
	titreLien.href = element.url;
	titreLien.textContent = element.titre;
	titreLien.style.fontWeight = "bold";
	titreLien.style.fontSize = "100%";
	titreLien.style.textDecoration = "none";
	ligne1.appendChild(titreLien);
	
	// Texte dans le titre
	var titreText = document.createTextNode(" " + element.url);
	ligne1.appendChild(titreText);
	
	lien.appendChild(ligne1);
	// ------------------------------------------------------
	
	// Ligne de l'auteur ------------------------------------
	var ligne2 = document.createElement("span");
	ligne2.textContent = "Ajouté par " + element.auteur;
	ligne2.style.display = "block";
	lien.appendChild(ligne2);
	// ------------------------------------------------------
	
	// Ajout de l'élément dans la liste après modification
	document.querySelector("#contenu").appendChild(lien);
});