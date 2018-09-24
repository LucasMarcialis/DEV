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
        	// Message confirmation
            if (isset($_GET['deleted']) AND $_GET['deleted'] == 'done')
            {
                echo '<p><em>La page a bien été supprimée !</em></p>';
            }

	        // Connexion à la base de données
	        try
	        { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', ''); }
	        catch(Exception $e)
	        { die('Erreur : '.$e->getMessage()); }

	        // Chargement des billets à supprimer
	        $req = $bdd->query('SELECT id, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation_fr FROM billets ORDER BY date_creation DESC');

	        while ($donnees = $req->fetch())
	        { 
	        	echo '<div class="news"><h3>'. htmlspecialchars($donnees['titre']).' le '.htmlspecialchars($donnees['date_creation_fr']).'</h3><p>'.htmlspecialchars($donnees['contenu']).'</p></div>';
		    ?>
				<div class="supprimer"><a href="supprimer_post.php?billet=<?php echo $donnees['id']?>">SUPPRIMER</a>
				</div>
				<br />
	    	<?php
	        }
	    	$req->closeCursor();
	    ?>
    </body>
</html>