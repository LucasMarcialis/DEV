<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$req = $bdd->prepare('UPDATE membres SET pseudo = :pseudo WHERE id =:id');
$req->execute(array(
	'pseudo' => $_POST['pseudo-modifier'],
    'id' => $_COOKIE['id']));

header('Location:profile.php?pseudo=updated');



