<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>3.3 - Mot de passe</title>
</head>
<body>
  <div id="main-wrapper">

    <form method="post" action="secret.php">
      <h1>Connexion</h1>
      <label for="email-connexion">Adresse e-mail</label><input type="email" name="email-connexion" id="email-connexion" />
      <label for="password-connexion">Mot de passe</label><input type="password" name="password" id="password-connexion" />
      <input type="submit" value="SE CONNECTER" id="button" />
    </form>

    <p></p>

  </div>
</body>
</html>