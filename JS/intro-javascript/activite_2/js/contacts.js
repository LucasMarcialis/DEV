/* 
Activité : gestion des contacts
*/

var Contact = {
    // Initialise le contact
    initContact: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    liste: function () {
        var contact = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return contact;
    }
};

var carole= Object.create(Contact);
carole.initContact("Lévisse", "Carole");

var melodie = Object.create(Contact);
melodie.initContact("Nelsonne", "Mélodie");

var contacts = [];
contacts.push(carole);
contacts.push(melodie);

console.log("Bienvenue dans le gestionnaire des contacts !");
var choix;

while (choix !== 0) {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    var choix = Number(prompt("Choisissez une option"));
    if (choix === 1) {
        console.log("Voici la liste de tous vos contacts :")
        contacts.forEach(function (contact) {
            console.log(contact.liste())
        });
    } else if (choix === 2) {
        var nom = prompt("Entrez le nom du nouveau contact");
        var prenom = prompt("Entrez le prénom du nouveau contact");
        var newContact = Object.create(Contact);
        newContact.initContact(nom, prenom);
        contacts.push(newContact);
        console.log("Le contact a bien été ajouté")
    } else if (choix === 0) {
        break;
    }
    else {
        console.log("Veuillez choisir un choix parmi 0, 1, 2");
    }
    console.log();
}
console.log("Au revoir !");
