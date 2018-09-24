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
    <h1>DATES SQL</h1>
    <p>
      <?php
      $reponse = $bdd->query('SELECT pseudo, message, date_message FROM posts WHERE date_message BETWEEN \'2010-04-02\' AND LOCALTIME');
      while($donnees = $reponse->fetch())
      {
        echo $donnees['date_message'] . ' - <b>' . $donnees['pseudo'] . '</b> : ' . $donnees['message'] . '<br />';
      }
      $reponse->closeCursor();

      ?>    
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT pseudo, message, DAY(date_message) AS jour, MONTH(date_message) AS mois, YEAR(date_message) AS annee, HOUR(date_message) AS heure, MINUTE(date_message) AS minute, SECOND(date_message) as seconde FROM posts');
      while ($donnees=$reponse->fetch())
      {
        echo $donnees['jour'] . '/' . $donnees['mois'] . '/' . $donnees['annee'] . ' ' . $donnees['heure'] . ':' . $donnees['minute'] . ':' . $donnees['seconde'] . '<br />';
      }
      $reponse->closeCursor();

      ?>
    </p>

    <p>
      <?php
      $reponse = $bdd->query('SELECT pseudo, message, DATE_FORMAT(date_message, \'%d/%m/%Y %Hh%imin%ss\') AS date_message from posts ');
      while ($donnees=$reponse->fetch())
      {
        echo $donnees['date_message'].' - '.$donnees['pseudo'].' : '.$donnees['message'].'<br />'; 
      }
      $reponse->closeCursor();
      ?>
    </p>

  </div>

</body>
</html>