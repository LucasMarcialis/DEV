<?php
if (preg_match("#gr[ioa]#", "Tous les chats sont gros."))
{
    echo 'VRAI';
}
else
{
    echo 'FAUX';
}

if (preg_match("#gr[os]#", "Tous les chats sont gros"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#gr[aoi]s#", "Tous les chats sont gros"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#gr[aoi]s#", "Berk c'est trop gras comme nourriture"))
{
	echo ' vrai';
}
else
{
	echo ' faux'; 
}

if (preg_match('#gr[aoi]s$#', "Berk c'est trop gras comme nourriture"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#[aeiouy]$#", "Je suis un vrai zéro"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match ('#^[aeiouy]#', "Je suis un vrai zéro"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#[a-z]#", "Cette phrase contient une lettre"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#[A-Z0-9]#", "cette phrase ne comporte ni majuscule ni chiffre"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#^[0-9]#", "Je vis au 21e siècle"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#<h[1-6]>#", "<h1>Une balise de titre HTML</h1>"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#[^0-9]#", "Cette phrase contient autre chose que des chiffres"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#[^A-Z0-9]#", "cette phrase contient autre chose que des majuscules et des chiffres"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#^[a-z]#", "Cette phrase ne commence pas par une minuscule"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#[^aeiouy]$#", "Cette phrase ne se termine pas par une voyelle"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#[^aeiouy]#", "ScrrmmmblllGnngngnngnMmmmmffff"))
{
	echo ' vrai'; // Cette phrase ne commence pas par une voyelle
}
else
{
	echo ' faux';
}

if (preg_match("#e+#", "eeeee"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#u?#", "ooo"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#[0-9]+#", "magnifique"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#^Yaho+$#", "Yahoooo"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#^Yaho+$#", "Yahooo c'est génial"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#^Bla(bla)*$#", "Blablablabla")) // avec les parenthèses, on fait répéter plusieurs lettres
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#^https://#", "https://"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#e{2,}#", "eeeeee"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#^Bla(bla){4}$#", "Blablablabla"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#^[0-9]{6}$#", "123456"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

/* if (preg_match("##", ""))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

/* if (preg_match("##", ""))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

/* if (preg_match("##", ""))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

/* if (preg_match("##", ""))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

/* if (preg_match("##", ""))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

/* if (preg_match("##", ""))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}
*/
?>