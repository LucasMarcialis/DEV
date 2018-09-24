<?php
    try
      { $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); }
    catch (Exception $e)
      { die('Erreur : ' . $e->getMessage()); }

    if ((strlen($_POST['pseudo'])>0) OR (strlen($_POST['message'])>0))
    {
      $req = $bdd->prepare('INSERT INTO minichat(pseudo, message, date_message) VALUES(:pseudo, :message, NOW())');

      $req->execute(array(
        'pseudo' => $_POST['pseudo'],
        'message' => $_POST['message'],
        ));
      header('Location: minichat.php');
    }
    else
    {
      header('Location: minichat.php?form=empty');
    }

    $pseudo = $_POST['pseudo'];
    setcookie('pseudo', $pseudo, time() + 365*24*3600, null, null, false, true);
?>

    