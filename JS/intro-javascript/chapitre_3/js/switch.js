var x = "abc";
switch (x) {
case "abc":
    console.log("x vaut abc");
    // pas de break : on passe au bloc suivant !
case "def":
    console.log("x vaut def");
    break;
}