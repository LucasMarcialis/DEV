<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>2.2 - Conditions</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
			<?php
			$age = 8;

			if ($age <= 12) //SI l'âge est inférieur ou égal à 12
			{
				echo "Salut gamin ! Bienvenue sur mon site!<br />";
				$autorisation_entrer = "Oui";
			}
			else // SINON
			{

				echo "Ceci est un site pour enfants, vous êtes trop vieux pour pouvoir entrer. Au revoir!<br />";
				$autorisation_entrer = "Non";
			}
			echo "Avez-vous l'autorisation d'entrer ? La réponse est $autorisation_entrer";
			?>
		</p>

		<p>
			<?php
			if ($autorisation_entrer == "Oui") // SI on a l'autorisation d'entrer
			{
				echo "Cool t'es rentré";// instructions à exécuter quand on est autorisé à entrer
			}
			elseif ($autorisation_entrer == "Non") // SINON SI  on n'a pas l'autorisation d'entrer
			{
				echo "Reste dehors"; // instructions à exécuter quand on est pas autorisé à entrer
			}
			else // SINON (la variable ne contient ni Oui ni Non, on ne peut pas agir)
			{
				echo "Euh, je ne connait pas ton âge, tu peux me le rappeler s'il te plait ?";
			}
			?>
		</p>

		<p>
			<?php
			$autorisation_entrer = true;

			if ($autorisation_entrer == true)
			{
				echo "Bienvenue petit nouveau. :o)";
			}
			elseif ($autorisation_enter == false)
			{
				echo "T'as pas le droit d'entrer!";
			}
			?>
		</p>

		<p>
			<?php
			if ($autorisation_entrer)
			{
				echo "Bienvenue petit nouveau. :o)";
			}
			else
			{
				echo "T'as pas le droit d'entrer!";
			}
			?>
		</p>

		<p>
			<?php
			$autorisation_enter = true;

			if(! $autorisation_enter)
			{
				echo "Barre toi de là";
			}
			else
			{
				echo "Bienvenue minot !";
			}
			?>
		</p>

		<p>
			<?php
			$pays = "Belgique";

			if ($pays == "France" OR $pays == "Belgique")
			{
				echo "Bienvenue sur notre site !";
			}
			else
			{
				echo "Désolés notre service n'est pas encore disponible dans votre pays !";
			}
			?>
		</p>

		<p>
			<?php
			$variable = 23;

			if ($variable ==23)
			{
				echo'<strong>Bravo !</strong> Vous avez trouvé le nombre mystère!';
			}
			?>
		</p>

		<p>
			<?php
			$variable = 23;

			if ($variable == 23)
			{
			?>
			<strong>Bravo ! </strong> Vous avez trouvé le nombre mystère !
			<?php
			}
			?>
		</p>
		<p>
			<?php
			$note = 16;

			if ($note == 0)
			{
				echo "Tu es vraiment un gros nul !!!";
			}
			elseif ($note == 5)
			{
				echo "Tu es très mauvais";
			}
			elseif ($note == 7)
			{
				echo "Tu es mauvais";
			}
			elseif ($note == 10)
			{
				echo "Tu as pile poil la moyenne, c'est un peu juste...";
			}
			elseif ($note == 12)
			{
				echo "Tu es assez bon";
			}
			elseif ($note == 16)
			{
				echo "Tu te débrouilles très bien";
			}
			elseif ($note == 20)
			{
				echo "Excellent travail, c'est parfait !";
			}
			else
			{
				echo "Désolé, je n'ai pas de message à afficher pour cette note";
			}
			?>
		</p>

		<p>
			<?php
			$note= 12;

			switch ($note) // on indique sur quelle variable on travaille
			{
				case 0: // dans le cas où $note vaut 0
					echo "Tu es vraiment un gros nul !!!";
				break;

				case 5: // dans le cas où $note vaut 5
					echo "Tu es très mauvais";
				break;

				case 7: // dans le cas où $note vaut 7
					echo "Tu es mauvais";
				break;

				case 10: // dans le cas où $note vaut 10
					echo "Tu as pile poil la moyenne, c'est un peu juste...";
				break;

				case 12: // dans le cas où $note vaut 12
					echo "Tu es assez bon";
				break;

				case 14: // dans le cas où $note vaut 14
					echo "Tu te débrouilles très bien";
				break;

				case 16: // dans le cas où $note vaut 16
					echo "Excellent travail, c'est parfait !";
				break;

				case 20: // dans le cas où $note vaut 20
					echo "Désolé, je n'ai pas de message à afficher pour cette note";
				break;

				default:
					echo "Désolé, je n'ai pas de message à afficher pour cette note";
			}
			?>
		</p>

		<p>
			<?php
			$age = 24;

			if ($age >= 18)
			{
				$majeur = true;
			}
			else
			{
				$majeur = false;
			}
			echo $majeur;
			?>
		</p>
		<p>
			<?php
			$age = 24;
			$majeur = ($age >= 18) ? true : false;
			echo $majeur;
			?>
		</p>
	</body>
</html>