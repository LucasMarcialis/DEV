<?php
try
  {
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));      
  }
catch (Exception $e)
  {
    die('Erreur : ' . $e->getMessage());
  }

  $req = $bdd->prepare('INSERT INTO billets (titre, contenu, date_creation) VALUES(:titre, :contenu, NOW())');

  $req->execute(array(
  	'titre' => $_POST['titre'],
  	'contenu' => $_POST['contenu'],
  ));
 

  header('Location: ajouter.php?posted=done');

?>