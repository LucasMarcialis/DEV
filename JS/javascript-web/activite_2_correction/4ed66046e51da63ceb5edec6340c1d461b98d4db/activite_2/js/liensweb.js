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

/*J'ai utilisé des fonctions que j'ai defini moi meme. Ces fonctions sont les suivantes : 
      
    - creerBoutton() crée formate et retourne le boutton permettant d'afficher le formulaire d'ajout de lien.
    - ajouterLiens(TableauDeLiens) qui prend en parametre un tableau de lien et les ajoute a la page
    - effacerBoutton() qui efface le boutton permettant d'afficher le formulaire d'ajout de lien. 
    - effacerFormulaire() Remplace le formulaire d'ajout de lien par le boutton d'affichage du formulaire
    - afficherFormulaire() crée, formate et affiche le formulaire d'ajout de lien en lieu et place du boutton     qui permet de l'afficher (le formulaire)
*/

var contenu = document.getElementById("contenu");
//Je crée un paragraphe afin de pouvoir y afficher le message d'ajout du lien
var infos = document.createElement("p");//Je stocke ce paragraphe dans la varble infos
//Je crée un autre paragraphe afin de pouvoir y afficher le formulaire ou le boutton d'affichage du formulaire
var espaceBouttonFormulaire = document.createElement("p");//ce paragraphe est stocké dans la varble espaceBouttonFormulaire

//Je crée un div dans lequel je mettrai tous les nouvaux liens. (Pour chaque nouveau lien, je crérai, dans ce div, un nouveau paragraphe)
var espaceLiens = document.createElement("div");//Ce div est stocké dans la variable espaceLiens

//Je donne un id à chacune de ces balises
infos.id = "infos";
espaceLiens.id = "espaceLiens";
espaceBouttonFormulaire.id = "espaceBouttonFormulaire";

//J'ajoute infos, espaceLiens et espaceBouttonFormulaire dans cet ordre à contenu
contenu.appendChild(infos);
contenu.appendChild(espaceBouttonFormulaire);
contenu.appendChild(espaceLiens);

espaceBouttonFormulaire.appendChild(creerBoutton()); // J'ajoute à la page le boutton permettant d'afficher le formulaire d'ajout de lien
ajouterLiens(listeLiens); //J'ajoute les premiers liens (contenus dans le tableau listeLiens) grace à la fonction ajouterLiens()

function creerBoutton() //crée, formate et retourne un boutton
{
    
//Je crée le boutton, je lui donne ses attributs, j'en fait la mise en forme et j'associe un événement au click.
    //var contenu = document.getElementById("contenu");

    var btnAjouterLien = document.createElement("input");//création du boutton
    btnAjouterLien.id = "btnAjouterLien";//Je donne un id au boutton. 
    btnAjouterLien.type = "button";//je lui attribue le type "boutton" 
    btnAjouterLien.value = "Ajouter un lien";//Je definie le texte quon pourra lire sur le boutton
    btnAjouterLien.style.borderRadius = "5px";//j'arrondi les bords du boutton
    btnAjouterLien.style.backgroundColor = "white";//je lui  donne une couleur de fond
    
    //je defini un événement associé au click du boutton
    btnAjouterLien.addEventListener("click", function()
    {
        afficherFormulaire(); //A chaque click sur le boutton, je fais appelle à la fonction                                            afficherFormulaire().
    });
    
    return btnAjouterLien; //La fonction retourne le boutton que nous venons de creer et de formater
}

function ajouterLiens(TableauDeLiens)//prend en paramètre un tableau de liens et les ajoute à la page
{  
    for(var i = TableauDeLiens.length-1 ; i >= 0  ; i--)//Je boucle sur le sur tableau de liens en commaçant par                                                      l'élément d'indice le plus élevé afin qu'il soit en                                                          dernière position à l'affichage.
    {
        //Je stoque les données du lien, contenu dans le tableau passé en paramètre, dans des variables
        var auteur = TableauDeLiens[i].auteur;
        var titre = TableauDeLiens[i].titre;
        var url = TableauDeLiens[i].url;

        //Je defini une expression reguliere pour l'url
        var regexUrl = /^http:\/\/|^https:\/\//; //Le symbole "|" entre les 2 chaînes recherchées indique que l'une ou l'autre des deux expressions est valide.Le symbole "^" indique que le caractère recherché doit être en début de chaîne.
        if(regexUrl.test(url) == true)
        {
           //Si le test est ok, Rien a faire
        }
        else
        {
            url = "http://" + url //Sinon je précède l'url de http://
        }
        
        espaceLiens.insertAdjacentHTML("afterBegin", '<p></p>');//Je crée à la 1ère place de "espaceLiens" un paragraphe pour le nouveau lien.
        var cadreNouveauLien = document.querySelector("#espaceLiens p");//Je stocke ce paragraphe dans une variable que ne nomme "cadreNouveauLien".
        
        //Je fais la mise en forme du cadre du nouveau lien
        cadreNouveauLien.style.backgroundColor = "white";
        cadreNouveauLien.style.margin = "10px 5px";
        cadreNouveauLien.style.padding = "10px 5px";
        cadreNouveauLien.style.fontSize = "110%";
        
        //=====Je crée un élément qui contitueront le cadre du nouveau lien
        var elmtA = document.createElement("a");//Je crée un élément "a" que j'ajouterai au cadre créé ci-dessus.
        var spanAuteur = document.createElement("span");//Je crée un élément "span" pour le nom de l'auteur
        var spanTitre = document.createElement("span");//Je crée un élément "span" pour le titre du lien
        var spanUrl = document.createElement("span");//Je crée un élément "span" pour l'url du lien

        //Je fais la mise en forme du titre
        spanTitre.textContent = titre;
        spanTitre.style.fontSize = "120%";
        spanTitre.style.color = "#428bca";//Je spécifie la couleur du texte.
        spanTitre.style.fontWeight = "bold";//
        
        //Je fais la mise en forme de l'élément "a" et je lui ajoute le titre du lien
        elmtA.href = url;//Je donne a notre élément a, un attribut href (obligatoire) dont la valeur est égale à l'url du lien.
        elmtA.target = "_blank";//Pour ouvrir le lien dans un nouvel onglet
        elmtA.style.textDecoration = "none";//
        elmtA.appendChild(spanTitre);//j'ajoute le titre du lien à l'élément "a"
        
        //Je defini le textContent de spanAuteur et de spanUrl
        spanAuteur.textContent = "ajouté par "+auteur;
        spanUrl.textContent = " " + url;
       
        //J'ajoute tous ces éléments au cadre du nouveau lien (dans un ordre précis)
        cadreNouveauLien.appendChild(elmtA);
        cadreNouveauLien.appendChild(spanUrl);
        cadreNouveauLien.appendChild(document.createElement("br"));//Pour faire un retour à la ligne
        cadreNouveauLien.appendChild(spanAuteur);  
    }
}

function effacerFormulaire()//efface le formulaire d'ajout de lien et le remplace par le boutton d'affichage du formulaire
{   
    var formulaire = document.getElementById("formulaire");
    espaceBouttonFormulaire.replaceChild(creerBoutton(), formulaire);//Remplace le formulaire par le boutton (Le boutton est créé par la fonction et renvoyé par la fonction creerBoutton())
}   

function afficherFormulaire()//crée, formate et affiche le formulaire d'ajout de lien en lieu et place du boutton qui permet de l'afficher (le formulaire)
{
    
    //var contenu = document.getElementById("contenu");//Variable contenu : stoque l'élément du DOM ayant l'id contenu
    var btnAjouterLien = document.getElementById("btnAjouterLien");//Variable btnAjouterLien : stoque l'élément du DOM ayant l'id btnAjouterLien (Voir fonction creerBoutton() ligne 58)
    
    //============Création du formulaire=============
    var formulaire = document.createElement("form"); //Je crée le formulaire que je stocke dans une variable formulaire
    formulaire.id = "formulaire";//Je lui donne l'ID formulaire
    var nomAuteur = document.createElement("input");//Je crée un input qui servira a renseigner le nom de l'auteur
    var titreLien = document.createElement("input");//Je crée un input qui servira a renseigner le titre du lien
    var urlLien = document.createElement("input");//Je crée un input qui servira a renseigner l'url du lien
    var btnSubmit = document.createElement("input");//Je crée un input qui sera de type submit et permettra de valider le formulaire.
    
    //============formatage du formulaire=============
    var ElmtsFormulaire = [nomAuteur, titreLien, urlLien, btnSubmit];//Je crée un tableau dans lequel je range les elements du formulaire afin de pouvoir les mettre en forme à l'aide d'une boucle for.
    for(var i = 0 ; i < ElmtsFormulaire.length ; i++)
    {
        if(i !== 3)//Les éléments d'indice 0, 1 et 2 sont des éléments de type texte. Seul l'élément d'indice 3 est de type submit.
        {
            ElmtsFormulaire[i].type = "text";
            ElmtsFormulaire[i].style.margin = "0px 2px 0px 2px";
            ElmtsFormulaire[i].required = true;//Je rends les champs nomAuteur, titreLien et urlLien obligatoire
            if(i == 0)//Je donne un id ainsi qu'un placeholder au champ nomAuteur.
            {
                ElmtsFormulaire[i].id = "nomAuteur";
                ElmtsFormulaire[i].placeholder = "Votre nom";
            }
            else if(i == 1)//Je donne un id ainsi qu'un placeholder au champ titreLien.
            {
                ElmtsFormulaire[i].id ="titreLien";
                ElmtsFormulaire[i].placeholder = "Titre du lien";
            }
            else if(i == 2)//Je donne un id ainsi qu'un placeholder au champ urlLien.
            {
                ElmtsFormulaire[i].id = "urlLien";
                ElmtsFormulaire[i].placeholder = "url du lien";
            }
        }
        else //Quand i==3, alors ElmtsFormulaire[i] == btnSubmit. Donc je formate ici le boutton submit
        {
            ElmtsFormulaire[i].type = "submit";
            ElmtsFormulaire[i].style.margin = "0px 2px 0px 2px";
            ElmtsFormulaire[i].id = "btnSubmit";
            ElmtsFormulaire[i].style.borderRadius = "5px";
            ElmtsFormulaire[i].style.backgroundColor = "white";       
        }
    }
    
    //========Ajout du formulaire à l'élément identifié par id = "contenu"
    for(var i = 0 ; i < ElmtsFormulaire.length ; i++)//J'ajoute d'abord les éléments au formulaire
    {
        formulaire.appendChild(ElmtsFormulaire[i]);
    }
    //J'ajoute ensuite le formulaire à "contenu" en le mettant à la place du boutton qui permet d'afficher le formulaire
    espaceBouttonFormulaire.replaceChild(formulaire, btnAjouterLien);//Je remplace le boutton par le formulaire
    
    formulaire.addEventListener("submit", function(e)//Je réagis à l'événement submit du formulaire
    {        
        
    //Je mets les informations du lien dans un tableau afin de pouvoir lui appliquer la fonction ajouterLiens()
        var nouveauLien = 
        [
            {
                titre: titreLien.value,
                url: urlLien.value,
                auteur: nomAuteur.value
            }
            //Ce tableau comporte juste un element qui est en fait un objet à 3 trois attributs.
        ];
        
        
        effacerFormulaire();//J'efface le formulaire afin de pouvoir afficher le message d'ajout du lien
        //Je formate le cadre du message
        infos.style.padding = "10px 5px";//NB : La variable infos est définie à la ligne 30
        infos.style.backgroundColor = "#428bca";
        infos.style.fontWeight = "bold";
        infos.style.textAlign = "center";
        infos.style.fontSize = "150%";
        infos.style.color = "white";
        ajouterLiens(nouveauLien);//J'applique la fonction ajouterLiens() au tableau contenant les informations sur le lien à ajouter (Le tableau nouveauLien est défini à la ligne 198 et la fonction ajouterLiens() est définie à la ligne 72)
        infos.textContent = 'Le lien \"'+nouveauLien[0].titre+'\" a bien été ajouté';
        
        //après 2 second, j'efface le message, et j'annule la mise en forme du cadre du message.
        setTimeout(function()
        {
            infos.textContent = "";
            infos.style.padding = "0px";
            infos.style.margin = "0px";
            infos.style.fontSize = "0%";
            infos.style.backgroundColor = "#eee";
        }, 2000);

    });   
}

