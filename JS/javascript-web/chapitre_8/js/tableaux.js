ajaxGet("http://localhost/DEV/JS/javascript-web-srv/data/tableaux.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JSON
    var tableaux = JSON.parse(reponse);
    // Affiche le titre de chaque film
    tableaux.forEach(function (tableau) {
    	var ligneElt = document.createElement("tr");
    	ligneElt.id = tableau.nom;

    	var nomElt = document.createElement("td");
    	nomElt.textContent = tableau.nom;

    	var anneeElt = document.createElement("td");
    	anneeElt.textContent = tableau.annee;

    	var peintreElt = document.createElement("td");
    	peintreElt.textContent = tableau.peintre;


    	ligneElt.appendChild(nomElt);
    	ligneElt.appendChild(anneeElt);
    	ligneElt.appendChild(peintreElt);
    	document.querySelector("tbody").appendChild(ligneElt);

        console.log(tableau.nom);
    })
});