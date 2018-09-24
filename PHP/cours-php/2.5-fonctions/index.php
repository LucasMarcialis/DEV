<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>2.5 - Fonctions</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
			<?php
			$phrase = 'Bonjour tout le monde ! Je suis une phrase !';
			$longueur = strlen($phrase);

			echo 'La phrase ci-dessous comporte <b>' . $longueur . '</b> caractères :<br />" ' . $phrase . ' "';
			?>
		</p>

		<p>
			<?php
			$ma_variable = str_replace('b', 'p', 'bim bam boum');

			echo $ma_variable;
			?>
		</p>

		<p>
			<?php
			$chaine = 'Cette chaine va etre melangee !';
			$chaine = str_shuffle($chaine);

			echo $chaine;
			?>
		</p>

		<p>
			<?php
			$chaine = 'COMMENT CA JE CRIE TROP FORT ???';
			$chaine = strtolower($chaine);

			echo $chaine;
			?>
		</p>

		<p>
			<?php
			$chaine = 'Comment ca je parle trop bas ?';
			$chaine = strtoupper($chaine);

			echo $chaine;
			?>
		</p>

		<p>
			<?php
			$annee = date('Y');
			echo $annee;
			?>
		</p>

		<p>
			<?php
			// Enregistrons les informations de date dans des variables
			$jour = date('d');
			$mois = date('m');
			$annee = date('y');

			$heure = date('h');
			$heure = $heure + 2;
			$minute = date('i');

			// Maintenant on peut afficher ce qu'on a recueilli
			echo 'Bonjour, nous sommes le ' . $jour . '/' . $mois . '/' . $annee . ' et il est ' . $heure . 'h' . $minute;

			?>
		</p>

		<p>
			<?php 
			function DireBonjour($nom)
			{
				echo 'Bonjour ' . $nom . '!<br />';
			}
			DireBonjour ('Marie');
			DireBonjour ('Pierre');
			DireBonjour ('Tristan');
			DireBonjour ('Clément');
			DireBonjour ('Michaël');
			?>
		</p>

		<p>
			<?php
			DireBonjour('Lucas');
			?>
		</p>

		<p>
			<?php
			function VolumeCone($rayon, $hauteur)
			{
				$volume = $rayon * $rayon * 3.14 * $hauteur * 1/3 ; // calcul du volume
				return $volume;
			}
			$volume = VolumeCone(3,1);
			echo 'Le volume d\'un cône de rayon 3 et de hauteur 1 est de ' . $volume;
			?>
		</p>
	</body>
</html>