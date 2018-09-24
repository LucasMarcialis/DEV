<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mon blog</title>
        <link href="style-admin.css" rel="stylesheet" /> 
    </head>
        
    <body>
        <a href="admin.php">Retour à la liste des actions</a>
        
        <?php
            if (isset($_GET['modified']) AND $_GET['modified'] == 'done')
            {
                echo '<p><em>La page a bien été modifiée!</em></p>';
            }
        ?>

    	<?php
	        // Connexion à la base de données
	        try
	        { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', ''); }
	        catch(Exception $e)
	        { die('Erreur : '.$e->getMessage()); }

	        // Chargement des billets à modifier 
	        $req = $bdd->query('SELECT id, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation_fr FROM billets ORDER BY date_creation DESC');

	        while ($donnees = $req->fetch())
	        { 
	        	echo '<div class="news"><h3>'. htmlspecialchars($donnees['titre']).' le '.htmlspecialchars($donnees['date_creation_fr']).'</h3><p>'.htmlspecialchars($donnees['contenu']).'</p></div>';
	    ?>
	    	<h6>Modifier :</h6>
		        <form method="post" action="modifier_post.php?billet=<?php echo $donnees['id'] ?>">
		            <label for="titre">Titre </label><input type="text" name="titre" 
		            id="" maxlength=255 />
		            <label for="contenu">Contenu </label><textarea name="contenu" id="contenu"></textarea>
		            <input type="submit" value="POSTER" id="button" />
		        </form>
		    <br />
	    <?php
	        }
	    	$req->closeCursor();
	    ?>

    </body>
</html>