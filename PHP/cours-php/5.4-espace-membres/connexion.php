<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$req = $bdd->prepare('SELECT id, pass  FROM membres WHERE email = :email');
$req->execute(array(
	'email' => $_POST['email-connexion']));
$resultat = $req->fetch();

$pass_hache = password_hash($_POST['password-connexion'], PASSWORD_DEFAULT);

$isPasswordCorrect = password_verify($_POST['password-connexion'], $resultat['pass']);

if (!$resultat)
{
    echo 'Mauvais identifiant ou mot de passe !';
}
else
{
    if ($isPasswordCorrect) {
        session_start();
        $_SESSION['id'] = $resultat['id'];
        $_SESSION['email'] = $_POST['email-connexion'];
        if ($_POST['stay-connected'] == 'on')
        {
            setcookie('id', $resultat['id'], time() + 365*24*3600);
        	setcookie('email', $_POST['email-connexion'], time() + 365*24*3600);
        	setcookie('password', $pass_hache, time() + 365*24*3600);
        }
        $req->closeCursor();
        header('Location: profile.php');
    }
    else
    {
        echo 'Mauvais identifiant ou mot de passe !';
    }
}