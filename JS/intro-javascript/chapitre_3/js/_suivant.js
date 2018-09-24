switch (x) {
case x = "lundi":
	console.log("mardi");
	break;
case x = "mardi":
	console.log("mercredi");
	break;
case x = "mercredo":
	console.log("jeudi");
	break;
case x = "jeudi":
	console.log("vendredi");
	break;
case x = "vendredi":
	console.log("samedi");
	break;
case x = "samedi":
	console.log("dimanche");
	break;
case x = "dimanche":
	console.log("lundi");
	break;
}
var jour = prompt("Quel jour serons-nous demain ?");
if (jour==="lundi"||jour==="mardi"||jour==="mercredi"||jour==="jeudi"||jour==="vendredi"||jour==="samedi"||jour==="dimanche"||) {
	console.log(switch(jour));
}
else {
	console.log("Vous n'avez pas rentré un jour");
}