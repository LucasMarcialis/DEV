<?php
  try
    { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
  catch (Exception $e)
    { die('Erreur : ' . $e->getMessage()); }

  $req = $bdd->prepare('DELETE FROM billets WHERE id=:id_billet');

  $req->execute(array(
    'id_billet' => $_GET['billet']
  ));
 

  header('Location: supprimer.php?deleted=done');

?>