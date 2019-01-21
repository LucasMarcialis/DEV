var nicks = [],
    nick;

while (nick = prompt('Entrez un prénom :')) {
        nicks.push(nick);
}
if (nicks.length > 0) {
	alert(nicks.join(' '));
} else {
	alert("Vous n'avez pas rentré de prénom");
}