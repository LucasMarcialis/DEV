<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>3.2.2 Réception données Formulaire</title>
</head>
<body>
  <div id="main-wrapper">

  	<h3>Bonjour <b>
    	<?php echo $_POST['prenom'] . ' ' . $_POST['nom']; ?>
    	</b> !
   	</h3>

  	<p>Je sais que votre email est : <b>
    	<?php echo $_POST['email']; ?>
    	</b>.
   	</p>

  	<p>Vous avez : <b>
    	<?php echo $_POST['age']; ?>
    	</b>ans.
   	</p>

   	<p>Vous nous kiffez à <b>
    	<?php echo $_POST['kiff']; ?>
    	/10</b><br />
    	<?php
    		$kiff = $_POST['kiff'];
    		if ($kiff < 3)
    		{
    			echo 'C\'est pas beaucoup :( ...';
    		}
    		elseif (($kiff >= 3) AND ($kiff <= 6))
    		{
    			echo 'On va s\'améliorer ;)';
    		}
    		elseif (($kiff >6 ) AND ($kiff <= 10))
    		{
    			echo 'Nous aussi on vous kiffe <3';
    		}
   		?>
   	</p>

  	<p>Vous nous bookez le <b>
    	<?php echo $_POST['date']; ?>
    	</b><br />Trop cool !
   	</p>

  	<p>Votre couleur préférée est le <b>
    	<?php echo $_POST['color']; ?>
    	</b>, <br />C'est la notre aussi :O
   	</p>

  	<p>

  		Ce que vous préférez chez nous c'est <b>
    	<?php echo $_POST['like']; ?>
    	</b> !<br />Merci :)</p>

  	<p>Votre format préféré c'est <b>le 
    	<?php echo $_POST['format']; ?>
    	</b> !<br/>C'est clair que c'est la classe !</p>

  	<p>Voici votre message <b>
    	<?php echo $_POST['message']; ?>
    	</b> ! <br />On en prend bien note ;)</p>

  	<p>Vous nous bookerez au <b>
    	<?php echo $_POST['club']; ?>
    	</b> !<br />On a déjà hâte !</p>

  </div>
</body>
</html>
