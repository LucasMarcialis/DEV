<?php 
  
    { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
  ?>

<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>4.6 - Fonctions SQL</title>
</head>
<body>

  <div id="main-wrapper">
    <h1>FONCTIONS SCALAIRES SQL</h1>
    <p>
      <?php
        $reponse = $bdd->query('SELECT UPPER(nom) AS nom_maj FROM jeux_video');

        while ($donnees = $reponse->fetch())
        {
          echo $donnees['nom_maj'] . '<br />';
        }

        $reponse->closeCursor();

      ?>
    </p>

    <p>
      <?php
        $reponse = $bdd->query('SELECT LOWER(nom) AS nom_min, possesseur, console, prix FROM jeux_video');

        while ($donnees = $reponse->fetch())
        {
          echo $donnees['nom_min'] . '<br />';
        }

        $reponse->closeCursor();

      ?>
    </p>

    <p>
      <?php
        $reponse = $bdd->query('SELECT nom, LENGTH(nom) AS longueur_nom FROM jeux_video');

        while ($donnees = $reponse->fetch())
        {
          echo $donnees['nom'].' : '.$donnees['longueur_nom'] . ' car.<br />';
        }

        $reponse->closeCursor();
      ?>
    </p>

    <p>
      <?php
        $reponse = $bdd->query('SELECT ROUND(prix, 2) AS prix_arrondi FROM jeux_video');

        while ($donnees = $reponse->fetch())
        {
          echo $donnees['prix_arrondi'] . '<br />';
        }

        $reponse->closeCursor();
      ?>
    </p>

    <h1>FONCTIONS D'AGREGAT SQL</h1>

    <p>
      <?php
      $reponse = $bdd->query('SELECT AVG(prix) AS average_price FROM jeux_video');

      while ($donnees = $reponse->fetch())
      {
        echo 'Prix moyen : ' . $donnees['average_price'] . '<br />';
      }
      $reponse -> closeCursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT AVG(prix) AS average_price FROM jeux_video');

      while ($donnees = $reponse->fetch())
      {
        echo 'Prix moyen : ' . $donnees['average_price'];
      }
      $reponse -> closeCursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT AVG(prix) AS average_price FROM jeux_video WHERE possesseur=\'Florent\'');

      $donnees = $reponse->fetch();
      
      echo 'Prix moyen des jeux de Florent : ' . $donnees['average_price'];

      $reponse -> closeCursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT SUM(prix) as prix_total FROM jeux_video');

      $donnees = $reponse->fetch();

      echo 'Prix total des jeux vidéos : ' . $donnees['prix_total'];

      $reponse ->closecursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT MAX(prix) as prix_max FROM jeux_video');

      $donnees = $reponse->fetch();

      echo 'Prix max : ' . $donnees['prix_max'];

      $reponse->closecursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT MIN(prix) AS prix_min FROM jeux_video');

      $donnees = $reponse->fetch();

      echo 'Prix min : ' . $donnees['prix_min'];

      $reponse ->closeCursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT COUNT(*) AS total_games FROM jeux_video');

      $donnees = $reponse->fetch();
      
      echo 'Nombre de jeux vidéos : ' . $donnees['total_games'];
      
      $reponse ->closeCursor();
      ?>
    </p>

    <!-- JE VEUX LE PRIX TOTAL DES JEUX DE MICHEL -->

    <p>
      <?php
      $reponse = $bdd->query('SELECT SUM(prix) AS prix_total_Florent FROM jeux_video WHERE possesseur=\'Florent\'');

      $donnees = $reponse->fetch();

      echo 'Prix total des jeux de Florent : ' . $donnees['prix_total_Florent'];

      $reponse-> closeCursor();
      ?>
    </p>

    <!-- JE VEUX LE NOMBRE DES JEUX DE FLORENT -->

    <p>
      <?php
      $reponse = $bdd->query('SELECT COUNT(nom) as nbre_jeux_florent FROM jeux_video WHERE possesseur=\'Florent\'');

      $donnees = $reponse->fetch();

      echo 'Nombre de jeux de Florent : ' . $donnees['nbre_jeux_florent'];

      $reponse->closeCursor();

      ?>
    </p>

    <!-- JE VEUX LE NOMBRE DE POSSESSEURS DE JEUX VIDEOs -->
    <p>
      <?php
      $reponse = $bdd->query('SELECT COUNT(DISTINCT possesseur) AS nbre_possesseurs FROM jeux_video');

      $donnees = $reponse->fetch();

      echo 'Nombre de possesseur de jeux : ' . $donnees['nbre_possesseurs'];

      $reponse->closeCursor();
      ?>
    </p>


    <p>
      <?php
      $reponse = $bdd->query('SELECT AVG(prix) AS prix_moyen, console FROM jeux_video GROUP BY console');
      while($donnees = $reponse->fetch())
      { echo $donnees['console'] . ' - ' . $donnees ['prix_moyen'] . '€<br />'; }
      $reponse->closecursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT AVG(prix) AS average_price, possesseur FROM jeux_video GROUP BY possesseur');
      while($donnees = $reponse->fetch())
      {
        echo 'Le prix moyen des jeux de ' . $donnees['possesseur'] . ' est de ' . $donnees['average_price'] . '€<br />';
      }
      $reponse->closeCursor();
      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT AVG(prix) AS average_price, console FROM jeux_video WHERE possesseur=\'Florent\' GROUP BY console HAVING average_price < 20');
      while ($donnees = $reponse->fetch())
      {
        echo 'Florent vend ses jeux à ' . $donnees['average_price'] . '€ sur la console ' . $donnees['console'] . ' (moins de 20 euros).<br />';
      }
      $reponse->closeCursor();
      ?>
  </div>

</body>
</html>