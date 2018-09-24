<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>3.1 - Transmettre données URL</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
			<?php
			if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter'])) // SI on a le nom et prénom
			{
				// 1 : On force la conversion en nombre entier
				$_GET['repeter'] = (int) $_GET['repeter'];

				// 2: Le nombre doit être compris entre 1 et 100
				if ($_GET['repeter'] >=1 AND $_GET['repeter'] <=100)
				{
					// 3 : Boucle de répétition du prénom et nom
					for ($i = 0; $i < $_GET['repeter'] ; $i++)
					{
						echo '<p>Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . '! <br />Comment allez-vous aujourd\'hui ? </p>';
					} 
				}
				else
				{
					echo '<p>Ca fait un peu trop de bonjour vous ne trouvez pas ?</p>';
				}
			}
			else
			{
				echo 'Il faut renseigner un nom et un prénom !';
			}
			?>
		</p>
	</body>
</html>