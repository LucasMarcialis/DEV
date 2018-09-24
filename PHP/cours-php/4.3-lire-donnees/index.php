<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>4.3 - Lire des donneés</title>

        <link rel='stylesheet' href='style.css' />
    </head>
    <body>
    	<!-- Lire des données
    	// Data System Name (DSN) : localhost, Login : root, Mdp : none
    	-->
    	<h1>ALL ROWS</h1>

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

		// on récupère tout le contenu de la table jeux_video
		$reponse = $bdd->query('SELECT * FROM jeux_video');

		// on affiche chaque entrée une à une
		while ($donnees = $reponse->fetch())
		{ 
		?>
		<p>
			<strong>Jeu</strong> : <?php echo $donnees['nom']; ?><br />
			Le possesseur de ce jeu est :<?php echo $donnees['possesseur']; ?>, et il le vend à <?php echo $donnees['prix']; ?> euros !<br />
			Ce jeu fonctionne sur <?php echo $donnees['console']; ?> et on peut y jouer à <?php echo $donnees['nbre_joueurs_max']; ?> et au maximum<br /> <?php echo $donnees['possesseur']; ?> a laissé ces commentaires sur <?php echo $donnees['nom']; ?> : <em><?php echo $donnees['commentaires']; ?></em>
		</p>
		<?php
		}

		$reponse->closeCursor(); // Termine le traitement de la requête

		?>


		<h1>NOM</h1>

		<?php

		// on récupère tout le contenu de la table jeux_video
		$reponse = $bdd->query('SELECT nom FROM jeux_video');

		// on affiche chaque entrée une à une
		while ($donnees = $reponse->fetch())
		{ 
		?>
		<span>
			<strong>Jeu</strong> : <?php echo $donnees['nom'] . '.<br />'; ?></em>
		</span>
		<?php
		}

		$reponse->closeCursor(); // Termine le traitement de la requête

		?>



		<h1>NOM + POSSESSEUR</h1>

		<?php

		// on récupère tout le contenu de la table jeux_video
		$reponse = $bdd->query('SELECT nom, possesseur FROM jeux_video');

		// on affiche chaque entrée une à une
		while ($donnees = $reponse->fetch())
		{ 
		?>
		<p>
			<strong>Jeu</strong> : <?php echo $donnees['nom']; ?><br />
			Le possesseur de ce jeu est :<?php echo $donnees['possesseur']; ?>.</em>
		</p>
		<?php
		}

		$reponse->closeCursor(); // Termine le traitement de la requête

		?>


		<h1>JEUX DE PATRICK</h1>

		<?php 

		$reponse = $bdd->query('SELECT * FROM jeux_video WHERE possesseur = \'Patrick\'');

		while ($donnees = $reponse->fetch())
		{
			echo $donnees['nom'] . ' appartient à ' . $donnees['possesseur'] . '<br />';
		}

		$reponse->closeCursor();

		?>



		<h1>JEUX PAR PRIX ODRE CROISSANT</h1>

		<?php

		$reponse = $bdd->query('SELECT * FROM jeux_video ORDER BY prix');

		while ($donnees = $reponse->fetch())
		{
			echo '<b>' . $donnees['possesseur'] . '</b> vend <b>' . $donnees['nom'] . '</b> au prix de <b>' . $donnees['prix'] . '</b> euros.<br />';
		}

		$reponse->closeCursor();

		?>

		<h1>JEUX PAR PRIX DECROISSANT</h1>

		<?php 

		$reponse = $bdd->query('SELECT * FROM jeux_video WHERE possesseur = \'Patrick\'');

		while ($donnees = $reponse->fetch())
		{
			echo $donnees['nom'] . ' appartient à ' . $donnees['possesseur'] . '<br />';
		}

		$reponse->closeCursor();

		?>


		<h1>JEUX INFERIEUR A 20€ PAR PRIX CROISSANT</h1>

		<?php

		$reponse = $bdd->query('SELECT * FROM jeux_video WHERE prix < 20 ORDER BY prix');

		while ($donnees = $reponse->fetch())
		{
			echo '<b>' . $donnees['possesseur'] . '</b> vend <b>' . $donnees['nom'] . '</b> au prix de <b>' . $donnees['prix'] . '</b> euros.<br />';
		}

		$reponse->closeCursor();

		?>


		<h1>JEUX INFERIEUR A 20€ PAR PRIX DECROISSANT</h1>

		<?php

		$reponse = $bdd->query('SELECT * FROM jeux_video WHERE prix < 20 ORDER BY prix DESC');

		while ($donnees = $reponse->fetch())
		{
			echo '<b>' . $donnees['possesseur'] . '</b> vend <b>' . $donnees['nom'] . '</b> au prix de <b>' . $donnees['prix'] . '</b> euros.<br />';
		}

		$reponse->closeCursor();

		?>

		<h1>JEUX DE 1 à 20</h1>

		<?php

		$reponse = $bdd->query('SELECT nom FROM jeux_video LIMIT 0, 20');

		while ($donnees = $reponse->fetch())
		{
			echo $donnees['nom'] . '<br />';
		}

		$reponse->closecursor();

		?>


		<h1>JEUX DE 20 à 35</h1>

		<?php

		$reponse = $bdd->query('SELECT nom FROM jeux_video LIMIT 19, 15');

		while ($donnees = $reponse->fetch())
		{
			echo $donnees['nom'] . '<br />';
		}

		$reponse->closecursor();

		?>


		<h1>NOM, POSSESSEUR, CONSOLE XBOX ET PS2 PRIX PAR ORDRE CROISANT DE 1 à 10</h1>

		<?php

		$reponse = $bdd->query('SELECT nom, possesseur, console, prix FROM jeux_video WHERE console=\'Xbox\' OR console=\'PS2\' ORDER BY prix DESC LIMIT 0,10');

		while ($donnees = $reponse->fetch())
		{
			echo '<b>' . $donnees['possesseur'] . '</b> vend le jeu <b>' . $donnees['nom'] . '</b> sur la console <b>' . $donnees['console'] . '</b> au prix de <b>' . $donnees['prix'] . '</b> euros.<br />';
		}

		$reponse->closeCursor();
		?>


		<!-- REQUETES SECURISEES -->
		<?php
		$req = $bdd->prepare('SELECT nom FROM jeux_video WHERE possesseur = ?');
		$req->execute(array($_GET['possesseur']));
		?>

		<!-- REQUETE PREPARE -->
		<?php

		$req = $bdd->prepare('SELECT nom, prix FROM jeux_video WHERE possesseur = :possesseur AND prix <= :prixmax');
		$req->execute(array('possesseur' => $_GET['possesseur'], 'prixmax' => $_GET['prix_max']));

		echo '<ul>';
		while($donnees = $req->fetch())
		{
			echo '<li>' . $donnees['nom'] . '(' . $donnees['prix'] . ' EUR)</li>';
		}
		echo '</ul>';

		$req->closeCursor();
		?>


    </body>
</html>