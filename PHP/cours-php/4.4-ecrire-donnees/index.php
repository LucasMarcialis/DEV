<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>4.4.1 - Ecrire des donneés - Halo 3</title>

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

		// On ajoute une entrée dans la table jeux_video
		$bdd->exec('INSERT INTO jeux_video(nom, possesseur, console, prix, nbre_joueurs_max, commentaires) VALUES (\'Halo 3\', \'Lucas\', \'Xbox360\', \'15\', \'4\', \'Meilleur jeu du monde\')');

		echo 'Le jeu a bien été ajouté';


		$reponse = $bdd->query('SELECT nom from jeux_video');

		while ($donnees = $reponse->fetch())
		{
			echo $donnees['nom'] . '<br />';
		}
		?>

		
    </body>
</html>