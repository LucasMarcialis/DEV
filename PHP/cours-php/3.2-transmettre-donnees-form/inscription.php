<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>3.2.2 Réception données Formulaire</title>
</head>
<body>
  <div id="main-wrapper">

  	<p>Inscription réussie</p>

    <p>L'adresse email <b><?php echo $_POST['email']; ?></b> a bien été enregistrée !</p>
    <p>Voici votre mot de passe : <b><?php echo $_POST['password-inscription']; ?></b>.</p>
  </div>
</body>
</html>
