<?php
function getBillets()
{
	try
	{
	  $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
	}
	catch(Exception $e)
	{
	  die('Erreur : '.$e->getMessage());
	}

	require('pagination.php');

	$req = $bdd->query('SELECT id, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation_fr FROM billets ORDER BY date_creation DESC LIMIT ' . $premiereEntree . ', 5');

	require('affichageAccueil.php');
}
?>