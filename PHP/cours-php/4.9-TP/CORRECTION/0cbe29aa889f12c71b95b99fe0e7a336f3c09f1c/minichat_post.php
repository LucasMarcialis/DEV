<?php
// On démarre la session AVANT d'écrire du code HTML
session_start();

// Connexion à la base de données
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test2;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

// Insertion du message à l'aide d'une requête préparée
$req = $bdd->prepare('INSERT INTO minichat (pseudo, message, date_ajout) VALUES(?, ?, NOW())');
$req->execute(array($_POST['pseudo'], $_POST['message']));

$_SESSION['pseudo'] = $_POST['pseudo'];

// Redirection du visiteur vers la page du minichat
header('Location: minichat.php');
?>
