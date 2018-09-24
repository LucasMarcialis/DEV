<?php
try
  {
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));      
  }
catch (Exception $e)
  {
    die('Erreur : ' . $e->getMessage());
  }

  $req = $bdd->prepare('INSERT INTO commentaires (id_billet, auteur, commentaire, date_commentaire) VALUES(:id_billet, :auteur, :commentaire, NOW())');

  $req->execute(array(
  	'id_billet' => $_GET['billet'],
  	'auteur' => $_POST['pseudo'],
  	'commentaire' => $_POST['commentaire']
  ));
 

  header('Location: commentaires.php?billet='. $_GET['billet']);

  setcookie('pseudo', $_POST['pseudo'], time() + 365*24*3600, null, null, false, true);
?>