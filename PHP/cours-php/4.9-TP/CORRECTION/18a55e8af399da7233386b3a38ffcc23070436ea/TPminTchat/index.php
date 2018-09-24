<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
 <?php
        $tabPosts = [];
        $bdd = new PDO('mysql:host=localhost;dbname=test2;charset=utf8', 'root', '');

        try {
            $bdd = new PDO('mysql:host=localhost;dbname=test2;charset=utf8', 'root', '');
        } catch (Exception $e) {

            die('Erreur : ' . $e->getMessage());
        }
        // Récupération des 10 derniers messages

        $reponse = $bdd->query('SELECT pseudo, message, date_ajout FROM minichat ORDER BY ID DESC LIMIT 0, 10');


// Affichage de chaque message (toutes les données sont protégées par htmlspecialchars)

        while ($donnees = $reponse->fetch()) {
            $tabPosts[] = $donnees;
            echo '<p><strong>' . htmlspecialchars($donnees['pseudo']) . '</strong> : ' . htmlspecialchars($donnees['message']) .' émis à '.$donnees['date_ajout'] . '</p>';
        }

        $reponse->closeCursor();
 ?>
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Mini tchat</title>
        <style>

                form

                {

                    text-align:center;

                }

         </style>
    </head>
    <body>
        <form method="post" action="minichat_post.php">
            <label for="pseudo">Votre pseudo</label><input type="text" name="pseudo" id="pseudo" placeholder="<?php echo count($tabPosts)? $tabPosts[0]["pseudo"] : "" ?>"/> <br/>

            <textarea name="message" id="message">Votre message ici...</textarea><br/>
            <input type="submit" name="Envoyer">

        </form>
        <?php
            foreach( $tabPosts as $donnees ){
                echo'<p> ['.'<strong>'.$donnees['date_ajout'].'] '.htmlspecialchars($donnees['pseudo']) .' : </strong>';
                echo $donnees['message'].'</p>';
            } 
        ?>

    </body>
</html>
