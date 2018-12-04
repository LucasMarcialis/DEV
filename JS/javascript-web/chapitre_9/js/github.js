
// Image Profil
// Nom profil
// site web associé à ce profil

// Lorsque je recherche un profil gitHub > Exact match pour chercher le nom dans l'API
// D'ou extract de l'ID et récupération de l'image + du site web associé à ce profil
// Ensuite Afficahge de la donnée
var form = document.querySelector("form");
var infos = document.getElementById("infos");

form.addEventListener("submit", function (e) {
    var profil = form.elements.profil.value;
    e.preventDefault();
    // Accès aux informations publiques sur le profil rentré dans le formulaire
    ajaxGet("https://api.github.com/users/" + profil, function (reponse) {
        // Transforme la réponse en un objet JSON
        var profil = JSON.parse(reponse);

        var photoElt = document.createElement("img");
        photoElt.src = profil.avatar_url;
        photoElt.style = "height: 150px; width: 150px";

        var nomElt = document.createElement("div");
        nomElt.style = "font-size: 20px";
        nomElt.textContent = profil.name;

        var entrepriseElt = document.createElement("div");
        entrepriseElt.textContent = profil.company;

        var siteWebElt = document.createElement("a");
        siteWebElt.href = profil.blog;
        siteWebElt.textContent = profil.blog;

        infos.innerHTML = "";
        infos.appendChild(photoElt);
        infos.appendChild(nomElt);
        infos.appendChild(entrepriseElt);
        infos.appendChild(siteWebElt);
    });
});

