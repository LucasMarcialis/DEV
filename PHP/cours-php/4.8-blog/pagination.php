<?php

// 5 messages par page
$messagesParPages = 5;


// Pagination
$retour_total = $bdd->query('SELECT COUNT(*) AS total FROM billets'); // Récupération du contenu dans la requète
$donnees_total = $retour_total->fetch(PDO::FETCH_ASSOC);
$total = $donnees_total['total'];

$nombreDePages = ceil($total/$messagesParPages);

if(isset($_GET['page'])) // Si la variable $_GET['page'] existe
{
  $pageActuelle = intval($_GET['page']);
  if($pageActuelle>$nombreDePages) // Si la valeur de $pageActuelle (le numéro de la page) est plus grand que le nombre de pages
  {
    $pageActuelle=1;
  }
}
else
{
  $pageActuelle=1;
}

$premiereEntree=($pageActuelle-1)*$messagesParPages; // On calcule la première entrée à lire

?>