<?php
// On démarre la session AVANT d'écrire du code HTML
session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mini-chat</title>
    </head>
    <style>
    form
    {
        text-align:center;
    }
    </style>
    <body>
    
    <form action="minichat_post.php" method="post">
    <p>
        <label for="pseudo">Pseudo</label> : <input type="text" name="pseudo" id="pseudo" value=<?php echo '"' . $_SESSION['pseudo'] . '"' ?> /><br />
        <label for="message">Message</label> :  <input type="text" name="message" id="message" /><br />

        <input type="submit" value="Envoyer" />
	</p>
    </form>

    <?php
    // Connexion à la base de données
    try
    {
    	$bdd = new PDO('mysql:host=localhost;dbname=test2;charset=utf8', 'root', '');
    }
    catch(Exception $e)
    {
            die('Erreur : '.$e->getMessage());
    }

    // Récupération des 10 derniers messages
    $reponse = $bdd->query('SELECT pseudo, message, DATE_FORMAT(date_ajout, \'%d/%m/%Y à %H:%i:%s\') AS date_ajout_fr FROM minichat ORDER BY date_ajout_fr DESC LIMIT 0, 10');

    // Affichage de chaque message (toutes les données sont protégées par htmlspecialchars)
    while ($donnees = $reponse->fetch())
    {
    	echo '<p><strong>[' . $donnees['date_ajout_fr'] . '] ' . htmlspecialchars($donnees['pseudo']) . '</strong> : ' . htmlspecialchars($donnees['message']) . '</p>';
    }

    $reponse->closeCursor();

    ?>
    </body>
</html>
