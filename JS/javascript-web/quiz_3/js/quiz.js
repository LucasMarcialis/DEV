/*var telephones = [
    {
        "marque": "Apple",
        "modele": "iPhone"
    },
    {
        "marque": "Samsung",
        "modele": "Galaxy"
    }
];
var json = JSON.stringify(telephones);
console.log(JSON.parse(json)[1].marque);

*/

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var infos = new FormData(form);
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", infos, function () {});
});