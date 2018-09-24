<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>4.4.2 - Ecrire des donneés - Modifier</title>

        <link rel='stylesheet' href='style.css' />
    </head>
    <body>
    	<!-- Lire des données
    	// Data System Name (DSN) : localhost, Login : root, Mdp : none
    	-->
    	<h1>ECRIRE HALO 3</h1>

		<?php

		// On se connecte à la base de donnée une seule fois en début de page, on vérifie qu'il n'y a pas d'erreur dans le code
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));			
		}
		catch (Exception $e)
		{
			die('Erreur : ' . $e->getMessage());
		}

		// Oups, on peut jouer à 2à à Halo 3 en ligne !
		$nb_modifs = $bdd->exec('UPDATE jeux_video SET nbre_joueurs_max = 20 WHERE nom = \'Halo 3\'');

		echo $nb_modifs . ' entrées ont été modifiées !';
		echo '<p><b>Le jeu a bien été modifié pour se jouer à 20 personnes !</b></p>';

		// Florent a racheté les jeux de Michel 
		$nb_modifs = $bdd->exec('UPDATE jeux_video SET possesseur = \'Florent\' WHERE possesseur = \'Michel\'');

		echo $nb_modifs . ' entrées ont été modifiées !';
		echo '<p><b>Florent a racheté tous les jeux de Michel !</b></p>';

		$reponse = $bdd->query('SELECT * from jeux_video');

		while ($donnees = $reponse->fetch())
		{
			echo $donnees['nom'] . ', ' . $donnees['possesseur'] . ', ' . $donnees['console'] . ', ' . $donnees['prix'] . ', ' . $donnees['nbre_joueurs_max'] . ', ' . $donnees['commentaires'] . '<br />';
		}
		?>

		
		<p><b>
			<?php
			$nb_modifs = $bdd->exec('DELETE FROM jeux_video WHERE ID = 55');
			echo $nb_modifs . ' entrées ont été supprimées';
			?>
		</b></p>

		<p>
			<?php
			$reponse = $bdd->query('SELECT nom FROM jeux_video') or die(print_r($bdd->errorInfo()));
			while ($donnees = $reponse->fetch())
			{
				echo $donnees['nom'] . '<br />';
			}
			?>
		</p>
		
    </body>
</html>