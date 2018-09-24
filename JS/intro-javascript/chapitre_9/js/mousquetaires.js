var mousquetaires = ["Athos", "Portos", "Aramis"];
console.log("Voici les trois mousquetaires !");
for(i=0;i < mousquetaires.length; i++) {
	console.log(mousquetaires[i]);
}
mousquetaires.push("d'Artagnan");
console.log("A présent ils sont quatre !");
mousquetaires.forEach( function (mousquetaire) {
	console.log(mousquetaire);
});