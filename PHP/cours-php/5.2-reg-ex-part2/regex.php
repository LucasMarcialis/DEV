<?php

/* ----------------------
#  indique le début d'une regex et un autre # indique la fin

$  indique la fin d'une chaîne

^  indique le début d'une chaîne

|  indique le OU entre deux ou plusieurs chaînes

[abc]  est une classe de caractères qui indique que plusieurs lettres peuvent appraître ici
    ici a OU b OU c

[0-9]  est une intervalle de classe qui autorise une plage de caractères
   ici du 0 au 9 soit l'ensemble des chiffres

?  indique que la lettre est facultative, elle peut y être 0 ou 1 fois
   ainsi a? reconnait 0 ou 1 a

+  indique que la lettre est obligatoire, elle doit apparaître 1 ou plusieurs fois
   ainsi a+ reconnait a, aa, aaa etc

*  indique que la lettre est facultative, elle peut apparaître 0, 1 ou plusieurs fois 
   ainsi a+ reconnait a, aaa, aaa etc mais s'il n'y a pas de a cela fonctionne aussi

\  indique que la lettre précédente est échappée càd une lettre et non un symbole spécial
   ainsi #Quoi \?# indique que le ? n'est pas un symbole spécial mais une lettre
   pour utiliser un antislash il faut un antistlash \\

\d indique un chiffre c'est [0-9]

\D indique ce qui n'est pas un chiffre, c'est [^0-9]

/w indique un caractère lphanumérique ou un tiret de souslignement, c'est [a-zA-Z0-9_]

\t indique une tabulation

\n indique une nouvelle ligne

\r indique un retour chariot

\s indique un espace blanc

\S indique ce qui n'est pas un espace blanc (\t \n \r)

.  indique n'importe quel caractre donc il autorise tout

MYSQL comprends les regex mais uniquement celle en POSIX alors que nous avons codé en PCRE
Différence POSIX PCRE :
- pas de délimiteurs ni d'options en POSIX (##)
- pas de classe abrégée comme \d mais possile d'utiliser le . pour n'importe quel caractère

Exemple : SELECT nom FROM visiteurs WHERE ip REGEXP '^84\.254(\.[0-9]{1,3}){2}$'
Sélectionne tous les noms de la table visiteur dont l'IP commence par 84.254 et se termine par deux autres nombres de 1 à 3 chiffres
-----------------------*/


if (preg_match("#impatient \!#", "Je suis impatient !"))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#\(très\) fatigué#", "Je suis (très) fatigué"))
{
	echo ' vrai';
}
else
{
	echo ' faux';
}

if (preg_match("#sommeil\.\.\.#", "J'ai sommeil..."))
{
	echo ' VRAI';
}
else
{
	echo ' FAUX';
}

if (preg_match("#^0[1-68]([-. ]?\d){8}$#", "06 1-4.2 4 5 313"))
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