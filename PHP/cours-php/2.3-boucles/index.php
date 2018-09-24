<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>2.3 - Boucles</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
			<?php
			$nombre_de_lignes = 1;

			while ($nombre_de_lignes <= 100)
			{
				echo 'Je ne dois pas regarder les mouches voler quand j\'apprends le PHP.<br />';
				$nombre_de_lignes++; // $nombre_de_lignes = nombre_de_lignes + 1
			}
			?>
		</p>

		<p>
			<?php
			$nombre_de_lignes = 1;

			while ($nombre_de_lignes <= 100)
			{
				echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
				$nombre_de_lignes ++; // $nombre_de_lignes = nombre_de_lignes + 1
			}
			?>
		</p>
		<p>
			<?php
			for ($nombre_de_lignes = 1; $nombre_de_lignes <= 100; $nombre_de_lignes++)
				// (initialisation; condition; incrémentation ajout 1 à chaque tour de boucle)
			{
				echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
			}
			?>
		</p>

	</body>
</html>