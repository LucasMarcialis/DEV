<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>4.4.2 - Ecrire des donneés - Prepare</title>

        <link rel='stylesheet' href='style.css' />
    </head>
    <body>
    	<!-- Lire des données
    	// Data System Name (DSN) : localhost, Login : root, Mdp : none
    	-->
    	<h1>AJOUT REQUETE PREPAREE</h1>

		<?php

		// On se connecte à la BDD
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));			
		}
		catch (Exception $e)
		{
			die('Erreur : ' . $e->getMessage());
		}



		$req = $bdd->prepare('INSERT INTO jeux-video(nom, possesseur, console, prix, nbre_joueurs_max, commentaires) VALUES(:nom, :possesseur, :console, :prix, :nbre_joueurs_max, :commentaires)');

		$req->execute(array(
			'nom' => $nom,
			'possesseur' => $possesseur,
			'console' => $console,
			'prix' => $prix,
			'nbre_joueurs_max' => $nbre_joueurs_max,
			'commentaires' => $commentaires
			));

		echo 'Le jeu a bien été ajouté !';
		?>

    </body>
</html>