<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        try {

            $bdd = new PDO('mysql:host=localhost;dbname=test2;charset=utf8', 'root', '');
        } catch (Exception $e) {

            die('Erreur : ' . $e->getMessage());
        }


// Insertion du message à l'aide d'une requête préparée

        $req = $bdd->prepare('INSERT INTO minichat(pseudo, message, date_ajout) VALUES(?, ?, NOW())');

        $req->execute(array($_POST['pseudo'], $_POST['message']));


// Redirection du visiteur vers la page du minichat

        header('Location: index.php');
        ?>
    </body>
</html>
