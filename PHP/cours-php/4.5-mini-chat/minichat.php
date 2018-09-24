<!DOCTYPE html>
<html lang=fr>
<head>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="style.css" />
  <title>Minichat</title>
</head>
<body>
  <div id="main-wrapper">
    <div id="mini-chat">
      <div id="messages">
        <h1>Mini chat</h1>
        <?php
          // Connexion à la BDD
          try
            { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
          catch (Exception $e)
            { die('Erreur : ' . $e->getMessage()); }

          // On fixe le nombre de message par page
          $messagesParPages = 10;

          // Requète Pagination
          $retour_total = $bdd->query('SELECT COUNT(*) AS total FROM minichat'); // Récupération du contenu dans la requète
          $donnees_total = $retour_total->fetch(PDO::FETCH_ASSOC); // On retourne le tout sous forme d'array
          $total = $donnees_total['total']; 
          
          // Calcul nombre de page total
          $nombreDePages = ceil($total/$messagesParPages);

          // Détermination de la page actuelle en fonction de $_GET['page']
          if(isset($_GET['page'])) // Si $_GET['page'] existe :
          {
            $pageActuelle=intval($_GET['page']); // On fixe la valeur de page Actuelle
            if (($pageActuelle>$nombreDePages) OR ($pageActuelle <= 1)) // Et si la valeur de $pageActuelle (le numéro de la page) est plus grand que le nombre de pages ou est strictement inférieur à 1
            {
              $pageActuelle=1; // On renvoie vers la première page la plus récente
            }
          }
          else // Si $_GET['page'] n'existe pas
          {
            $pageActuelle=1; // On renvoie vers la première page la plus récente
          }

          // On ferme la requète retour_total
          $retour_total->closeCursor();

          // On calcule la première entrée à lire pour la LIMIT de la requète SQL qui va suivre
          $premiereEntree=($pageActuelle-1)*$messagesParPages; 

          // Requète messages
          $message = $bdd->query('SELECT id, pseudo, message, DATE_FORMAT(date_message, \'%d/%m/%Y à %H:%i:%s\') AS date_message_fr FROM minichat ORDER BY id DESC LIMIT ' . $premiereEntree . ', ' . $messagesParPages);

          while ($donnees = $message->fetch())
          {
            echo '<p>[' . htmlspecialchars($donnees['date_message_fr']) . '] <b> ' . htmlspecialchars($donnees['pseudo']) . '</b> : ' . htmlspecialchars($donnees['message']) . '</p>
        '; 
          }
          $message->closeCursor(); // On ferme la requète
        ?>

        <div id=pagination>
          <ul class="pagination">
            <?php
              for ($i=1; $i<=$nombreDePages; $i++) // On fait notre boucle
              {
                if($i==$pageActuelle) // S'il s'agit de la page actuelle
                {
                  echo '<li class="active"><a>'.$i.'</a></li>'; // On affiche le numéro de la page sélectionné
                }
                else // Sinon
                {
                  echo '<li class="inactive"><a href="minichat.php?page='.$i.'">'.$i.'</a></li>'; // On affiche les autres numéros de page avec un lien hypertexte
                }
              }
              ?>
          
          </ul>
        </div>
        <div class="button">
          <a href="minichat.php">RAFRAICHIR</a>
        </div>
      </div>
      <form method="post" action="minichat_post.php">
        <label for="pseudo">PSEUDO</label><input type="text" name="pseudo" 
        id="pseudo" maxlength=30 value="<?php
          if (isset($_COOKIE['pseudo'])) {
            echo $_COOKIE["pseudo"]; }
          else { echo ''; } ?>"/>
        <?php
          if (isset($_GET['form']) AND $_GET['form'] == "empty")
          { echo '<div class="missingpseudo">Pseudo manquant</div>'; }
          else { echo '<div class="missingpseudo"></div>'; }
        ?>
        <label for="message">MESSAGE</label><textarea name="message" id="message"></textarea>
        <?php
          if (isset($_GET['form']) AND $_GET['form'] == "empty")
          { echo '<div class="missingmessage">N\'oublie pas d\'écrire ton message !</div>'; }
          else { echo '<div class="missingmessage"></div>'; }
        ?>
        <input type="submit" value="POSTER" class="button" />
      </form>
    </div>
  </div>
</body>
</html>