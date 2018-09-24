<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mon blog</title>
        <link href="style.css" rel="stylesheet" /> 
    </head>
        
    <body>
        <a href="admin.php">Retour à la liste des actions</a>

        <?php
            // Connexion à la base de données
            try
            { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', ''); }
            catch(Exception $e)
            { die('Erreur : '.$e->getMessage()); }
        ?>

        <form method="post" action="ajouter_post.php">
            <label for="titre">Titre</label><input type="text" name="titre" 
            id="" maxlength=255 />
            <label for="contenu">Contenu</label><textarea name="contenu" id="contenu"></textarea>
            <input type="submit" value="POSTER" id="button" />
        </form>

        <?php
            if (isset($_GET['posted']) AND $_GET['posted'] == 'done')
            {
                echo '<p><em>La page a bien été ajoutée !</em></p>';
            }
            else
            {
                echo '';
            }
        ?>

    </body>
</html>