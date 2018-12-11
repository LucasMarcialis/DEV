var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
	e.preventDefault();
	var data = new FormData(form);
	console.log(data);
	ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", data, function(reponse) {
		var messageElt = document.createElement("p");
    	messageElt.textContent = "L'article a bien été ajouté.";
    	document.getElementById("messageSucces").appendChild(messageElt);
	})
})