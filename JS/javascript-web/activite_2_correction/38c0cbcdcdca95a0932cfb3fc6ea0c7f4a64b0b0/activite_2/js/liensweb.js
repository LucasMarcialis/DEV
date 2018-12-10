/* 
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

//création d'une boucle pour parcourir les éléments du tableau
for (var i = 0; i < listeLiens.length; i++) {

    //création de la balise lien de type <a>
    var clicUrl = document.createElement("a");
    clicUrl.href = listeLiens[i].url;
    clicUrl.textContent = listeLiens[i].titre;
    clicUrl.style.color = "428bca";

    //création du bloc 
    var bloc = document.createElement("p");
    bloc.setAttribute("class", "lien");
    bloc.appendChild(clicUrl);
    bloc.appendChild(document.createTextNode(" " + listeLiens[i].url));
    bloc.appendChild(document.createElement("br"));
    bloc.appendChild(document.createTextNode("Ajouté par " + listeLiens[i].auteur));

    //insertion du bloc
    document.getElementById("contenu").appendChild(bloc);


}

//-------------Fonctions--------------------

//fonction gestion du bouton <<ajouter un lien>>
function gestBouton() {
    var boutonAjout = document.createElement("button");
    boutonAjout.textContent = "Ajouter un lien"
    boutonAjout.id = "bouton1";
    //document.getElementById("ptarget").appendChild(boutonAjout);
    document.getElementById("contenu").insertBefore(boutonAjout, document.getElementsByClassName("lien")[0]);

    return boutonAjout;
}

//Attente action utilisateur sur le bouton
function boutonListen() {
    var boutonAjout = gestBouton();
    boutonAjout.addEventListener("click", function () {

        switchNoeud(formulaire, boutonAjout);
    });
    return boutonAjout;
}

//fonction pour effacer un noeud enfant d'un parent
function switchNoeud(nNode, oNode) {

    document.getElementById("contenu").removeChild(oNode);
    document.getElementById("contenu").insertBefore(nNode, document.getElementsByClassName("lien")[0]);

}

//fonction de creation et insertion du formulaire de saisie
function creatForm() {
    //création du formulaire de saisie
    var formulaire = document.createElement("form");
    formulaire.setAttribute("id", "fsaisie");
    var nom = document.createElement("input");
    nom.setAttribute("type", "text");
    nom.setAttribute("name", "nom");
    nom.setAttribute("id", "nom");
    nom.setAttribute("placeholder", "Entrez votre nom");
    nom.setAttribute("required", "");
    formulaire.appendChild(nom);

    var titre = document.createElement("input");
    titre.setAttribute("type", "text");
    titre.setAttribute("name", "titre");
    titre.setAttribute("id", "titre");
    titre.setAttribute("placeholder", "Entrez le titre du lien");
    titre.setAttribute("required", "");
    formulaire.appendChild(titre);

    var lien = document.createElement("input");
    lien.setAttribute("type", "text");
    //le type de lien pourrait être de type "url" directement afin de contrôler que la saisie est correcte. Le choix de "text" est volontaire afin de répondre à la consigne demandée et pouvoir rajouter http:// quand c'est nécessaire.
    lien.setAttribute("name", "lien");
    lien.setAttribute("id", "lien");
    lien.setAttribute("placeholder", "Entrez le lien url");
    lien.setAttribute("required", "");
    formulaire.appendChild(lien);

    //finalisation du formulaire
    var envoi = document.createElement("input");
    envoi.setAttribute("type", "submit");
    envoi.setAttribute("value", "Envoyer");
    formulaire.appendChild(envoi);
    return formulaire;
}

//fonction de test du lien et rajout éventuel de http://
function testUrl(lien) {
    //une rgular expression est utilisée pour vérifier le début de l'url saisie 
    var regexUrl = /^https*:\/\//;
    
    if (!regexUrl.test(lien.toLowerCase())) {
        //on rajoute http:// dans le cas ou c'est nécessaire
        lien = "http://" + lien;
    }
    return lien;
}


//fonction de rajout du titre saisi dans la liste affichée
function ajoutSaisie(nom, titre, url) {
    //création de la balise lien de type <a>
    var clicUrl = document.createElement("a");
    clicUrl.href = url;
    clicUrl.textContent = titre;
    clicUrl.style.color = "428bca";

    //création du bloc 
    var bloc = document.createElement("p");
    bloc.setAttribute("class", "lien");
    bloc.appendChild(clicUrl);
    bloc.appendChild(document.createTextNode(" " + clicUrl));
    bloc.appendChild(document.createElement("br"));
    bloc.appendChild(document.createTextNode("Ajouté par " + nom));

    //insertion du bloc
    document.getElementById("contenu").insertBefore(bloc, document.getElementsByClassName("lien")[0]);

}

//attente saisie formulaire
function formListen(formulaire) {

    formulaire.addEventListener("submit", function (e) {
        var nom = formulaire.elements[0].value;
        var titre = formulaire.elements[1].value;
        var lien = formulaire.elements[2].value;

        //on contrôle s'il y a http(s):// ou non
        var lien = testUrl(lien);
        //on appelle la fonction servant aà insérer les valeurs saisies
        ajoutSaisie(nom, titre, lien);
        // Annulation de l'envoi des données
        e.preventDefault();
        //création du nouveau bouton
        var boutonAjout = boutonListen();
        // activation de l'affichage du message de confirmation de rajout 
        AfficheMessage(titre);
        // réinsertion du bouton à la place du formulaire
        switchNoeud(boutonAjout, formulaire);
    });



}

function AfficheMessage(titre) {
    //création du message de confirmation à afficher
    var message = "Le lien " + "\"" + titre + "\"" + " a bien été rajouté";
    //création du bloc 
    var blocMessage = document.createElement("p");
    blocMessage.id = "mess";
    blocMessage.textContent = message;
    // insertion du message juste avant le premier bloc de la liste
    document.getElementById("contenu").insertBefore(blocMessage, document.getElementsByClassName("lien")[0]);

    // suppression du message d'information au bout de 2 secondes
    setTimeout(function () {
        document.getElementById("contenu").removeChild(blocMessage);
    }, 2000);

}

//début de l'exécution 
var formulaire = creatForm();
boutonListen();
formListen(formulaire);
