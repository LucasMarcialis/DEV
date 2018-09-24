<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>2.1 - Variables</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
		AGE VISITEUR :
		<?php // INTEGER
		$age_du_visiteur = 17; // La variable est créée et vaut 17
		echo $age_du_visiteur;
		$age_du_visiteur = 23; // La variable est modifiée et vaut 23
		echo $age_du_visiteur;
		$age_du_visiteur = 55; // La variable est modifiée et vaut 55
		echo $age_du_visiteur;
		?>
		</p>

		<p>
		NOM VISITEUR :
		<?php // STRING
		$nom_du_visiteur = "Mateo21";
		echo $nom_du_visiteur;
		?>
		</p>

		<p>
		POIDS VISITEUR :
		<?php // FLOAT
		$poids = 57.3;
		echo $poids;
		?>
		</p>

		<p>
		BOOLEAN :
		<?php // BOOLEAN
		$je_suis_un_zero = true;
		echo $je_suis_un_zero;
		$je_suis_bon_en_php = false;
		echo $je_suis_bon_en_php;
		?>
		</p>

		<p>
		NULL : 
		<?php // NULL
		$pas_de_valeur = null;
		echo $pas_de_valeur;
		?>
		</p>

		<p>
		CONCATENER :
		<?php // CONCATENER
		echo "Le visiteur s'appelle ";
		echo $nom_du_visiteur;
		echo " et a ";
		echo $age_du_visiteur;
		echo " ans.";
		?>
		</p>

		<p>
		CONCATENER EN UNE LIGNE :
		<?php // CONCATENER EN UNE LIGNE
		echo 'Le visiteur s\'appelle ' . $nom_du_visiteur . ' et a ' . $age_du_visiteur . ' ans.'
		?>
		</p>
		ADDITION :
		<?php // ADDITION
		$nombre = 2 + 4; 
		echo $nombre;
		$nombre = 5 - 1;
		echo $nombre;
		?>

		<p>
		OPERATIONS DE BASE :
		<?php // OPERATIONS DE BASE
		$nombre = 10;
		$resultat = ($nombre + 10) * $nombre;
		echo $nom_du_visiteur . ' a gagné ' . $resultat . ' euros à la roulette.';
		?>
		</p>

		<p>
		MODULO :
		<?php // MODULO
		$nombre = 10 % 5;
		echo $nombre;
		$nombre = 10%3;
		echo $nombre;
		?>
		</p>

	</body>
</html>