<?php

try
{
  $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
  die('Erreur : '.$e->getMessage());
}

?>

<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>5.4 - Profil</title>
</head>
<body>
  <div id="main-wrapper">
    <div id="box">
      <?php
        $req = $bdd->query('SELECT id, pseudo, email, date_inscription FROM membres WHERE id='.$_COOKIE['id']);
        $data = $req->fetch();
      ?>
      <?php
        if (file_exists('uploads/'.$data['email']))
        {
          echo '<img src="uploads/'. $data['email'].'.jpg"/ >';
        }
      ?>
      <h1>PROFIL</h1>
      <p>Pseudo : <b><?php echo $data['pseudo']; ?></b></p>
      <p>Email : <b><?php echo $data['email']; ?></b></p>
      <p>date d'inscription : <b><?php echo $data['date_inscription']; ?></b></p>
    </div>

    <p></p>

    <form method="post" action="modifier-password.php">
      <h2>MODIFIER VOTRE<br />MOT DE PASSE</h2>
      <label for="password-modifier">Mot de passe</label><input type="password" name="password-modifier" id="password-modifier" />
      <input type="submit" value="MODIFIER" id="button" />
      <?php
        if (isset($_GET['password']) == "updated")
        {
          echo '<p>Mot de passe changé :)</p>';
        }
      ?>
    </form>

    <p></p>

    <form method="post" action="modifier-pseudo.php">
      <h2>MODIFIER VOTRE<br />PSEUDO</h2>
      <label for="pseudo-modifier">Pseudo</label><input type="text" name="pseudo-modifier" id="pseudo-modifier" />
      <input type="submit" value="MODIFIER" id="button" />
      <?php
        if (isset($_GET['pseudo']) == "updated")
        {
          echo '<p>Pseudo changé :)</p>';
        }
      ?>
    </form>

    <p></p>

    <form action="cible_envoi.php" method="post" enctype="multipart/form-data">
      <h2>UPLOADEZ VOTRE <br />PHOTO DE PROFIL</h2>
      <input type="file" name="monfichier" /><br />
      <input type="submit" value="ENVOYER" id="button" /><br />
    </form>

    <p><a href="deconnexion.php">Se déconnecter</a></p>


    <?php $req->closeCursor(); ?>
  </div>
</body>
</html>