<?php
// Vérification de la validité des informations

if (preg_match('#[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}#', $_POST['email-inscription']))
{
	if($_POST['password-inscription'] === $_POST['password-inscription-confirmation'])
	{
		try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
		}
		catch(Exception $e)
		{
			die('Erreur : '.$e->getMessage());
		}

		// Hachage du mot de passe
		$pass_hache = password_hash($_POST['password-inscription'], PASSWORD_DEFAULT);

		// Insertion
		$req = $bdd->prepare('INSERT INTO membres(pseudo, pass, email, date_inscription) VALUES(:pseudo, :pass, :email, CURDATE())');
		$req->execute(array(
			'pseudo' => $_POST['pseudo-inscription'],
			'pass' => $pass_hache,
			'email' => $_POST['email-inscription']));

		header('Location: index.php?inscription=done');
	}
	else
	{
		echo 'password not matching';
	}
}
else
{
	echo 'wrong format email';
}



