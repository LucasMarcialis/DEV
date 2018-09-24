<?php session_start(); ?>

<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>5.4 - Espace Membres</title>
</head>
<body>
  <div id="main-wrapper">
    <?php if (isset($_SESSION['email']))
      {
        header('Location: profile.php');
      }
    ?>
    <form method="post" action="inscription.php">
      <h1>INSCRIPTION</h1>
      <label for="pseudo-inscription">Pseudo</label><input type="text" name="pseudo-inscription" id="pseudo-inscription" />
      <label for="email-inscription">Adresse e-mail</label><input type="email" name="email-inscription" id="email-inscription" />
      <label for="password-inscription">Mot de passe</label><input type="password" name="password-inscription" id="password-inscription" />
      <label for="password-inscription-confirmation">Confirmation du mot de passe</label><input type="password" name="password-inscription-confirmation" id="password-inscription-confirmation" />
      <input type="submit" value="S'INSCRIRE" id="button" />
    </form>

    <p>
      <?php
        if (isset($_GET['inscription']) == "done")
        {
          echo 'Inscription réussie !<br />Vous pouvez désormais vous connecter :)';
        }
      ?>
    </p>

    <p></p>

    <form method="post" action="connexion.php">
      <h1>Connexion</h1>
      <label for="email-connexion">Adresse e-mail</label><input type="email" name="email-connexion" id="email-connexion" />
      <label for="password-connexion">Mot de passe</label><input type="password" name="password-connexion" id="password-connexion" />
      <input type="checkbox" name="stay-connected" id="stay-connected" /> <label for="case">Se souvenir de moi</label>
      <input type="submit" value="SE CONNECTER" id="button" />
    </form>

    <p><a href="deconnexion.php">Se déconnecter</a></p>

    <p></p>
  </div>
</body>
</html>