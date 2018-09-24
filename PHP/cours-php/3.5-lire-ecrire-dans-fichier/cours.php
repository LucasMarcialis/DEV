<!-- <?php
// 1 : on ouvre le fichier

// r ouvre le fichier en lectuere seule

// r+ ouvre le fichier en mode lecture et écriture

// a ouvre le fichier en écriture seule. Avantage : si le ficier n'existe pas il est automatiquement créé

//a+ Ouvre le fichier en lecture et écriture. Si le fichier n'existe pas, il est créé automatiquement. Attention le répertoire doit avoir un CHMOD à 777 dans ce cas ! A noter que si le fichier existe déjà, le texte sera rajouté à la fin.

/*

$monfichier = fopen('compteur.txt, r+');


// 2 Opérations sur fichier

// 2.1 fgets > lire ligne par ligne le fichier - créer boucle pour lire le fichier entier
$ligne = fgets($monfichier);

// 2.2 fputs > écrire
fputs($monfichier, 'Texte à écrire');

// 2.3
fseek($monfichier, 0);

// 3 : quand on a fini de l'utiliser, on ferme le fichier
fclose($monfichier);

*/
?> 