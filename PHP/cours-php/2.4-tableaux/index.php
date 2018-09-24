<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>2.4 - Tableaux</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
			<?php
			// La fonction array permet de créer un array
			$prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');
			echo $prenoms[0]
			?>
		</p>

		<p>
			<?php
			$prenoms[0] = 'François'; // array 0
			$prenoms[1] = 'Michel'; // array 1
			$prenoms[2] = 'Nicole'; // array 1
			echo $prenoms[1]
			?>
		</p>

		<p>
			<?php
			$prenoms[] = 'François'; // array 0
			$prenoms[] = 'Michel'; // array 1
			$prenoms[] = 'Nicole'; // array 2
			echo $prenoms[1]
			?>
		</p>

		<p>
			<?php
			// on crée notre array $coordonnees
			$coordonnees = array (
				'prenom' => 'François',
				'nom' => 'Dupont',
				'adresse' =>'3 Rue du Paradis',
				'ville' => 'Marseille');
			echo $coordonnees['prenom'];
			echo $coordonnees['nom'];
			echo $coordonnees['adresse'];
			echo $coordonnees['ville'];
			?>
		</p>

		<p>
			<?php
			$coordonnees['prenom'] = 'François';
			$coordonnees['nom'] = 'Dupont';
			$coordonnees['adresse'] = '3 Rue du Paradis';
			$coordonnees['ville'] = 'Marseille';
			echo $coordonnees['prenom'] . '<br/>';
			echo $coordonnees['nom'] . '<br/>';
			echo $coordonnees['adresse'] . '<br/>';
			echo $coordonnees['ville'] . '<br/>';

			foreach($coordonnees as $element)
			{
				echo $element . '<br />';
			}
			?>
		</p>

		<p>
		<?php
		// On crée notre array $prenoms
		$prenoms = array('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');

		//  Puis on fait une boucle pour tout afficher
		for ($numero = 0; $numero < 5; $numero++)
		{
			echo $prenoms[$numero] . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
		}
		?>
		</p>
		
		<p>
		<?php
		$prenoms = array('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');

		foreach ($prenoms as $element)
		{
			echo $element . '<br />'; // affichera $prenoms[0], $prenoms [1]
		}
		?>
		</p>

		<p>
			<?php
			// on crée notre array $coordonnees
			$coordonnees = array (
				'prenom' => 'François',
				'nom' => 'Dupont',
				'adresse' =>'3 Rue du Paradis',
				'ville' => 'Marseille');
			foreach ($coordonnees as $element)
			{
				echo $element . '<br />';
			}
			foreach ($coordonnees as $cle => $element)
			{
				echo '[' . $cle . '] vaut ' . $element . '<br />';
			}
			?>
		</p>

		<p>
			<?php
			$coordonnees = array (
				'prenom' => 'François',
				'nom' => 'Dupont',
				'adresse' =>'3 Rue du Paradis',
				'ville' => 'Marseille');
			echo '<pre>';
			print_r($coordonnees);
			echo'</pre>';
			?>
		</p>

		<p>
			<?php
			$coordonnees = array (
				'prenom' => 'François',
				'nom' => 'Dupont',
				'adresse' =>'3 Rue du Paradis',
				'ville' => 'Marseille');

			if (array_key_exists('nom', $coordonnees))
			{
				echo 'La clé "nom" se trouve dans les coordonnées ! <br />';
			}
			if (array_key_exists('pays', $coordonnees))
			{
				echo 'La clé "pays" se trouve dans les coordonnées !';
			}
			else
			{
				echo 'La clé "pays" ne se trouve pas dans les coordonnées ! <br />';
			}
			?>
		</p>

		<p>
			<?php
			$fruits = array('Banane', 'Pomme', 'Poire', 'Cerise', 'Fraise', 'Framboise');

			if (in_array('Myrtille', $fruits))
			{
				echo 'La valeur "Myrtille" se trouve dans les fruits !';
			}

			if (in_array('Cerise', $fruits))
			{
				echo 'La valeur "Cerise" se trouve dans les fruits !';
			}
			?>
		</p>

		<p>
			<?php
			$fruits = array ('Banane', 'Pomme', 'Poire', 'Cerise', 'Fraise', 'Framboise');

			$position = array_search('Fraise', $fruits);
			echo '"Fraise" se trouve en position ' . $position . '<br />';

			$position = array_search('Banane', $fruits);
			echo '"Banane" se trouve en position ' . $position . '<br />';
			?>
		</p>
	</body>
</html>