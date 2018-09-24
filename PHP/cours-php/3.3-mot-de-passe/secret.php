<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>3.3 - Mot de passe</title>
</head>
<body>
  <div id="main-wrapper">
  	<?php
  		if (isset($_POST['email-connexion']) AND $_POST['email-connexion'] == "l.marcialis@gmail.com") // Si l'email est correct
        {
        if (isset($_POST['password']) AND $_POST['password'] == "zangetzu") // Si le mot de passe est correct
          {
          ?>

            <h1>Pas de secrets entre nous voyons...</h2>

            <p>T'es arrivé sur la page de la bogossitude niggaz</p>

          <?php
          }
          else
          {
            ?>

              <h1>Try again bitch!</h1>

          <?php
          }
        }
  		else
  		{
        ?>

  		    <h1>Try again bitch !</h1>'
          
       <?php
  		}
      ?>

  </div>
</body>
</html>