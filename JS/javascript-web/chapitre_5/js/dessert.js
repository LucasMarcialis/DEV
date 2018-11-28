document.querySelector("button").addEventListener("click", function() {
    var nomDessert = prompt("Quel dessert voulez-vous ajouter ?");
    
    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    dessertElt.addEventListener("click", function (e) {
    	var nouveauNom = prompt("Modifier le nom du dessert : ", e.target.textContent);
    	e.target.textContent = nouveauNom;
    })
    document.getElementById("desserts").appendChild(dessertElt);
});
