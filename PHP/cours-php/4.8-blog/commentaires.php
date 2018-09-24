<?php 
  
    { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
  ?>

<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>4.7 - Blog - Commentaires</title>
</head>
<body>

  <a href="index.php">Retour à la liste des billets</a>

  <div class=billet>
  <?php
    // Préparation requète sécurisée SQL
    $req = $bdd->prepare('SELECT id, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation_fr FROM billets WHERE id =?');
    // Ajout variable billet et création de l'array
    $req->execute(array($_GET['billet']));
    //
    $donnees = $req->fetch();
    if (!empty($donnees)) // Si l'entrée du tableau de données n'est pas vide, alors exécuter le code suivant :
    {
      include('billet.php');
      $billet_exist='yes';
    }
    else // Sinon afficher billet n\'existe pas'
    {
      echo '<h1>Ce billet n\'existe pas</h1>';
      $billet_exist='no';
    }
    $req->closeCursor();
  ?>
  </div>
  
  <?php
    // Préparation de la requète SQL sécurisée
    $req = $bdd->prepare('SELECT id, id_billet, auteur, commentaire, DATE_FORMAT(date_commentaire, \'%d/%m/%Y %Hh%imin%ss\') AS date_commentaire FROM commentaires WHERE id_billet = ?');
    // Ajout variable billet et création de l'array
    $req->execute(array($_GET['billet']));
    if (!empty($donnees)) // Si l'entrée du tableau de données n'est pas vide, alors exécuter le code suivant :
    {
      ?>
      <h1>Commentaires</h1>
      <div class="commentaires">
      <?php
      while ($donnees = $req->fetch())
      {
        echo '<p><b>'.$donnees['auteur'].'</b> le '.$donnees['date_commentaire'].'<br/>'.$donnees['commentaire'].'</p>';
      }
    $req->closeCursor();
    }
  ?>
  </div>

  <div class="ajout_commentaire">
    <?php
      if ($billet_exist!='no') // Si l'entrée du tableau de données n'est pas vide, alors exécuter le code suivant :
      {
        ?>
        <form method="post" action="commentaire_post.php?billet=<?php echo $_GET['billet']; ?>">
          <label for="pseudo">Pseudo</label><input type="text" name="pseudo" 
          id="pseudo" maxlength=30 value="<?php
            if (isset($_COOKIE['pseudo'])) {
              echo $_COOKIE['pseudo']; }
            else { echo ''; } ?>"/>
          <label for="commentaire">Commentaire</label><textarea name="commentaire" id="commentaire"></textarea>
          <input type="submit" value="POSTER" id="button" />
        </form>
        <?php
      }
    ?>
  </div>
</body>
</html>