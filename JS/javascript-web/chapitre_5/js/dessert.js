document.querySelector("button").addEventListener("click", function() {
    var dessert = prompt("Quel dessert voulez-vous ajouter ?");
    var dessertElt = document.createElement("li");
    dessertElt.id = dessert;
    dessertElt.textContent = dessert;
    document.getElementById("desserts").appendChild(dessertElt);
});

document.querySelector("li").addEventListener("click", function () {
	var dessert = prompt("Que voulez-vous modifier ?");
	dessertElt.textContent = dessert;
	//document.getElementById
})


/*
0) Bonus Modifier un dessert présent dans la liste en cliquant dessus
Lorsque tu sélectionne un dessert, cela prompt une alerte pour le modifier
Lorsque tu l'a modifié il s'enregistre en variable
Cette variable est réinjectée dans l'élément modifié
*/