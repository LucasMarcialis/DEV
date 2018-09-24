<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mon blog</title>
  <link href="style.css" rel="stylesheet" /> 
    </head>
        
    <body>
        <h1>Blog</h1>
        <p>Derniers billets du blog :</p>

<?php

while ($donnees = $req->fetch())
{ include('billet.php'); }
$req->closeCursor();
?>

<ul id="pagination">

<?php
  echo '<div class="pagination" align="center">Page : '; // on centre la liste des pages pour l'affichage
  for ($i=1; $i<=$nombreDePages; $i++) // On fait notre boucle
  {
    // On fait notre condition
    if($i==$pageActuelle) // S'il s'agit de la page actuelle
    {
      echo '<b>  ['.$i.'] </b>';
    }
    else
    {
      echo '<a href="index.php?page='.$i.'">'.$i.'</a>';
    }
  }
  echo'</div>';
  $retour_total->closeCursor();
?>

</body>
</html>