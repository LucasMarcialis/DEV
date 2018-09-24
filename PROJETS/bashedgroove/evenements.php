<!DOCTYPE html>
<html>
	<head>
		<!-- En tête de la page -->
		<meta charset="utf-8" />
		<title>Bashed Groove - Evenements</title>
			<meta name = "description" content="Organisateurs d'évènements festifs. Le groove est notre métier.">

		<!-- FONTS
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		-->
		
		<!-- CSS STYLESHEET -->
		<link rel="stylesheet" href="style.css" />

		<!-- FAVICON -->
		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

	<body>
		<!-- corps de la page-->

		<!-- header -->
		<header>
			<?php include("header.php") ?>
			<?php include("menu.php") ?>
		</header>
		<!-- fin du header -->
		<div class="corps-home">
			<h1>Evènements</h1>

			<h2><em>Découvrez les évènements que nous avons organisé :</em></h2>
			<p>
				<ul class="evenements">
					<li><a class="events" href="evenements/fete-de-la-musique-2018.php">Fête de la musique 2018</a></h2></li>
					<li><a class="events" href="evenements/fete-de-la-musique-2017.php">Fête de la musique 2017</a></h2></li>
				</ul>
			</p>
		</div>
		<!-- FOOTER-->
		<footer>
			<?php include("footer.php")?>
		</footer>
		<!-- FOOTER-->
	</body>
</html>