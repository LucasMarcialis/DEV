// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dlElt = document.createElement("dl");
document.getElementById("contenu").appendChild(dlElt);

for(i = 0; i < mots.length; i++ ) {
    var termElt = document.createElement("dt");
    var termeStrElt = document.createElement("strong");
    var defElt = document.createElement("dd");
    termeStrElt.textContent = mots[i].terme;
    defElt.textContent = mots[i].definition;
    termElt.appendChild(termeStrElt);
    dlElt.appendChild(termElt);
    dlElt.appendChild(defElt);
}