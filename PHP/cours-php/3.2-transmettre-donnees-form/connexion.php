<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>3.2.2 Réception données Formulaire</title>
</head>
<body>
  <div id="main-wrapper">

  	<p>Connexion réussie</p>

    <p>Bienvenue <b>
    	<?php echo $_POST['email-connexion']; ?>
    	</b> !
   	</p>
    <p>Vous êtes désormais connecté.</p>
  </div>
</body>
</html>
