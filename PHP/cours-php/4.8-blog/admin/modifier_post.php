<?php
  try
    { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
  catch (Exception $e)
    { die('Erreur : ' . $e->getMessage()); }

  $req = $bdd->prepare('UPDATE billets SET titre=:titre, contenu=:contenu WHERE id=:id_billet');

  $req->execute(array(
  	'titre' => $_POST['titre'],
  	'contenu' => $_POST['contenu'],
    'id_billet' => $_GET['billet']
  ));
 

  header('Location: modifier.php?modified=done');

?>