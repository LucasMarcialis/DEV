<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Ma page web</title>
	</head>

	<body>
		<h2>Page de test</h2>

		<p>
			Cette page contient du code HTML avec des balises PHP.<br />
			<?php echo "Ceci est du texte"; ?>
			<?php echo "Cette ligne a été écrite entièrement en PHP."; ?>
			Voici quelques petits tests !
		</p>

		<p> Aujourd'hui nous sommes le <?php echo date('d/m/Y h:i:s'); ?>.</p>



		<ul>
		<li style="color: blue;">Texte en bleu</li>
		<li style="color: red;">Texte en rouge</li>
		<li style="color: green;">Texte en vert</li>
		</p>

		<?php 
		/* Encore du PHP
		Toujours du PHP */
		?>
	</body>
</html>