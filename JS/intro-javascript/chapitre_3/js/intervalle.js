var nombre = prompt("Rentrez un nombre");
if ((nombre<0) || (nombre>100)) {
	console.log(nombre + " est en dehors de l'intervalle [0,100]");
}
else {
	console.log(nombre + " est à l'intérieur de l'intervalle [0,100]");
}