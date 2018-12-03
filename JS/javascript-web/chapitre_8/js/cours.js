// Il est risqué d'utiliser des requètes HTTP Synchrones en JavaScript : pendant toute la durée de l'échange, la page web semblera bloquée et ne répondra plus aux actions de l'utilisateur.
/*

// Création d'une requête HTTP Synchrone
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);

*/


// Création d'une requête HTTP Asynchrone
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/tests/DEV/JS/javascript-web-srv/data/languages.txt");
// Envoi de la requête
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès



// Fonction de call back à utiliser dans la factorisation AJAX GEt
function afficher(reponse) {
    console.log(reponse);
}

// Exécution d'un appel AJAX GET
// > Voir ajax.js

// Exécution d'un appel AJAX GET 2
ajaxGet("http://localhost/tests/DEV/JS/javascript-web-srv/data/languages.txt", afficher);

/*
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    console.log(reponse);
});
*/

ajaxGet("http://localhost/tests/DEV/JS/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});