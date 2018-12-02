// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys", "Raegar"];
    default:
        return [];
    }
};



maisons.forEach(function(maison) {
    var maisonElt = document.createElement("option");
    maisonElt.textContent = maison.nom;
    maisonElt.value = maison.code;
    document.getElementById("maison").appendChild(maisonElt);
    
    document.getElementById("maison").addEventListener("change", function (e) {
        document.getElementById("persos").innerHTML = "";
        var personnages = getPersonnages(e.target.value);
        console.log(personnages);
        
        for (var i = 0; i < personnages.length ; i ++ ) {
            var personnageElt = document.createElement("li");
            personnageElt.textContent = personnages[i];
            document.getElementById("persos").appendChild(personnageElt);  
        }
    });
    
});

