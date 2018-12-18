var age = parseInt(prompt("Entrez votre age"));

switch(age) {
	case (age>= 1 && age<= 17) :
		alert("Vous n'êtes pas encore majeur.");
	break;

	case (age >= 18 && age <= 49) :
		alert("Vous êtes majeur mais pas encore senior.");
	break;

	case (age >= 50 && age <= 59) :
		alert("Vous êtes senior mais pas encore retraité.");
	break;

	case (age >= 60 && age <= 120) :
		alert("Vous êtes retraité, profitez de votre temps libre ! ");
	break;

// default(alert("Ceci n'est pas un âge !"));
}