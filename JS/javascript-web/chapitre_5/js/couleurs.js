document.addEventListener("keypress", function(e) {
    var touche = String.fromCharCode(e.charCode).toUpperCase();
    console.log(touche);
    var divElt = document.getElementsByTagName("div");
  

  	function backgroundColor(couleur) {
  		for(var i = 0; i < divElt.length; i++) {
    		divElt[i].style.backgroundColor = couleur;
    	}
  	}
    switch (touche) {
    case "J":
    	backgroundColor("yellow");
        break;
    case "R":
    	backgroundColor("red");
        break;
    case "V":
    	backgroundColor("green");
        break;
    case "B":
    	backgroundColor("white");
        break;
    }
});