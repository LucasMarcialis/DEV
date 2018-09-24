<?php
// On écrit un cookie AVANT D'écrire du code HTML
setcookie('pseudo', 'Marsous', time()+ 365*24*3600, null, null, false, true);

// On démarre la session AVANT d'écrire du code HTML
session_start();

// On s'amuse à créer quelques variables de session dans $_SESSION
$_SESSION['prenom'] = 'Jean';
$_SESSION['nom'] = 'Dupont';
$_SESSION['age'] = 24;

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>3.4 - Session et Cookie</title>
    </head>
    <body>
    <p>
        Salut <?php echo $_SESSION['prenom']; ?> !<br />
        Tu es à l'accueil de mon site (index.php). Tu veux aller sur une autre page ?
    </p>
    <p>
        <a href="mapage.php">Lien vers mapage.php</a><br />
        <a href="monscript.php">Lien vers monscript.php</a><br />
        <a href="informations.php">Lien vers informations.php</a>
    </p>
    </body>
</html>