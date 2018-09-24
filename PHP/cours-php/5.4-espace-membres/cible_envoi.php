<?php
// Testons si le fichier a bien été envoyé et s'il n'y a pas d'erreur
if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
{
        // Testons si le fichier n'est pas trop gros
        if ($_FILES['monfichier']['size'] <= 1000000)
        {
                // Testons si l'extension est autorisée
                $infosfichier = pathinfo($_FILES['monfichier']['name']);
                $extension_upload = $infosfichier['extension'];
                $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
                if (in_array($extension_upload, $extensions_autorisees))
                {
                        // On peut valider le fichier et le stocker définitivement
                        move_uploaded_file($_FILES['monfichier']['tmp_name'], 'uploads/' . basename($_COOKIE['email'] . '.jpg'));
                        header('Location: profile.php');
		}
		else
		{
			echo "L'extension n'est pas autorisée !<br />Veuillez uploader un fichier .jpg, .jpeg, .gif ou .png.";
		}
		}
		else
		{
			echo "Le fichier est trop lourd !<br />Veuillez uploader un fichier de moins de 1Mo.";
		}	
}
else
{
	echo "Vous n'avez pas uploadé de fichier.<br />Veuillez uploader un fichier.";
}
?>