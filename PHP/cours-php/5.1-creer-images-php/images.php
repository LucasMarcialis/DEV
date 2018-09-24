<?php
header ("Content-type: image/png);"); // On indique que l'on va renvoyer une image PNG
$image = imagecreate(1600,950); // On créé une nouvelle image

$orange = imagecolorallocate($image, 255, 128, 0); // La couleur orange étant la première à apparaître dans le script, c'est celle qui rpends le dessus ur l'affichage
$bleu = imagecolorallocate($image, 0, 0, 255);
$bleuclair = imagecolorallocate($image, 156, 227, 254);
$noir = imagecolorallocate($image, 0, 0, 0);
$blanc = imagecolorallocate($image, 255, 255, 255);

imagestring($image, 4, 35, 15, "Salut les nazes !", $noir); // Met dans l'image $image la police de taille 4 aux coordonnées 35, 15 avec comme texte "Salut les nazes !" de couleur blanche

imagesetpixel($image, 100, 100, $noir); // Dessiner un pixel aux coordonnées (x, y)

imageline ($image, 30, 0, 150, 50, $noir); // Dessinr une ligne entre les coordonnées (x1,y1) et (x2,y2)

imageellipse($image, 200, 50, 100, 100, $noir);

imagerectangle($image, 200, 150, 100, 100, $bleu);

$points = array(10, 40, 120, 50, 160, 160);
imagepolygon($image, $points, 3, $noir);

imagecolortransparent($image, $orange);

imagepng($image);// On demande à afficher l'image PNG
?>