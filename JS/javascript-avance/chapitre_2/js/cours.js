/*##########################
############################
		LES VARIABLES
############################
##########################*/


/* TYPE OF */

var number = 2;
alert(typeof number); // Affiche : "number"

var text = "text";
alert(typeof text); // Affiche : "string"

var aBoolean = false;
alert(typeof aBoolean); // Affiche : "boolean"

alert(typeof nothing); // Affiche : "undefined"


/* PARSEINT */

var text = '1337', number;

number = parseInt(text);
alert(typeof number); // Affiche : "number"
alert(number); // Affiche : "1337"

// Attention, prompt renvoie un string même si un nombre est rentré en input

var first, second, result;

first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = parseInt(first) + parseInt(second);

alert(result);


/* CONCATÉNATION DE DEUX NOMBRES*/

var text, number1 = 4, number2 = 2;
text = number1 + '' + number2;
alert(text); // Affiche : « 42 »


