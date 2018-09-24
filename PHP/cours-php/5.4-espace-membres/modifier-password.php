<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$pass_hache = password_hash($_POST['password-modifier'], PASSWORD_DEFAULT);

$req = $bdd->prepare('UPDATE membres SET pass = :pass WHERE id =:id');
$req->execute(array(
	'pass' => $pass_hache,
    'id' => $_COOKIE['id']));

header('Location:profile.php?password=updated');



