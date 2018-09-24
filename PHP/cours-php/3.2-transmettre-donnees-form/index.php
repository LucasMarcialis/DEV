<!DOCTYPE html>
<html lang=fr>
<head>
  <link rel="stylesheet" href="style.css" />
  <title>3.2.1 Transmettre données Formulaire</title>
</head>
<body>
  <div id="main-wrapper">

    <form method="post" action="traitement.php">
      
      <h1>Contact</h1>
      
      <label for="prenom">Votre  prénom</label><input type="text" name="prenom" placeholder="Pierre" id="prenom" maxlength=20" autofocus />
      
      <label for="nom">Votre nom</label><input type="text" name="nom"  placeholder="Qui Roule" id="nom" maxlength=20" />
      
      <label for="email">Votre e-mail</label><input type="email" name="email"  placeholder="pierre@exemple.com" id="email" maxlength=30" />
      
      <label for="age">Votre age</label><input name="age" type="number" id="age" min="18" max="125" placeholder="Assez pour boire" />
      
      <label for="kiff">On vous fait kiffer comment de 0 à 10?</label><input name="kiff" type="range" id="range" min="0", max="10" />
      
      <label for="date">Vous nous bookez quand ?</label><input name="date" type="date" id="date" />
      
      <label for="color">Ta couleur préférée ?</label><input name=color type="color" id="color" />
      
      <label for="message">Votre message</label><textarea name="message"  placeholder="N'amasse pas mousse !"  id="message" maxlength="500"></textarea>
      
      <p>vous nous aimez ?</p>
        <div id="checkbox">
          <input type="checkbox" name="like" id="yes" /><label for="yes" id="text-yes" >Bien sûr !</label><br/>
        </div>
        <div id="checkbox">
          <input type="checkbox" name="like" id="no" /><label for="no" id="text-no" >Pas du tout</label><br/>
        </div>
      
      <p>Quel est votre format préféré ?</p>
        <div id="checkbox">
          <input type="radio" name="format" id="mp3" /><label for="mp3" id="text-mp3" >MP3</label><br/>
        </div>
        <div id="checkbox">
          <input type="radio" name="format" id="cd" /><label for="cd" id="text-cd" >CD</label><br/>
        </div>
        <div id="checkbox">
          <input type="radio" name="format" id="vinyle" /><label for="vinyle" id="text-vinyle">Vinyle</label><br/>
        </div>      
        
        <p><label for="club">Dans quel endroit veux-tu nous booker ?</label></p>
        <select name="club" id="club">
          <option value="Badaboom">Badaboom</option>
          <option value="Concrete">Concrete</option>
          <option value="Debonair">Debonair</option>
          <option value="Faust">Faust</option>
          <option value="Pont">Sous un pont</option>
          <option value="Rave">Dans une Rave</option>
          <option value="Rex">Rex</option>
          <option value="Wanderlust">Wanderlust</option>
        </select>
      
      <input type="hidden" name="pseudo" value="Marsous" />

      <input type="submit" value="JE CONFIRME" id="button" />

    </form>

    <p></p>

    <form method="post" action="inscription.php">
      <h1>INSCRIPTION</h1>
      <label for="email-inscription">Adresse e-mail</label><input type="email" name="email-inscription" id="email-inscription" />
      <label for="password-inscription">Mot de passe</label><input type="password" name="password-inscription" id="password-inscription" />
      <label for="password-inscription-confirmation">Confirmation du mot de passe</label><input type="password" name="password-inscription-confirmation" id="password-inscription-confirmation" />
      <input type="submit" value="S'INSCRIRE" id="button" />
    </form>

    <p></p>

    <form method="post" action="connexion.php">
      <h1>Connexion</h1>
      <label for="email-connexion">Adresse e-mail</label><input type="email" name="email-connexion" id="email-connexion" />
      <label for="password-connexion">Mot de passe</label><input type="password" name="password" id="password-connexion" />
      <input type="submit" value="SE CONNECTER" id="button" />
    </form>

    <p></p>

    <form action="cible_envoi.php" method="post" enctype="multipart/form-data">
      <h1>ENVOI DE FICHIER</h1>
      <input type="file" name="monfichier" /><br />
      <input type="submit" value="ENVOYER" id="button" /><br />
    </form>


  </div>
</body>
</html>