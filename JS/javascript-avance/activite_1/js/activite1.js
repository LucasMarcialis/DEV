/*jslint browser: true */
/*global window */


function conversion(input) {
    "use strict";
    var centaines = (input - input % 100) / 100,
        resteCentaines = input - centaines * 100,
        dizaines = (resteCentaines - resteCentaines % 10) / 10,
        unites = input % 10;
        // chiffreEnLettre;
    
    function lettreUnite(unite) {
        switch (unite) {
        case 0:
            return "";
        case 1:
            return "un";
        case 2:
            return "deux";
        case 3:
            return "trois";
        case 4:
            return "quatre";
        case 5:
            return "cinq";
        case 6:
            return "six";
        case 7:
            return "sept";
        case 8:
            return "huit";
        case 9:
            return "neuf";
        }
    }
    function lettreCentaines(inputCentaines) {
        if (inputCentaines !== 1) {
            return lettreUnite(inputCentaines) + "-cent";
        } else if (inputCentaines === 1) {
            return "cent";
        }
    }
    
    function lettreResteCentaines(inputResteCentaines) {
        switch (inputResteCentaines) {
        case 10:
            return "dix";
        case 11:
            return "onze";
        case 12:
            return "douze";
        case 13:
            return "treize";
        case 14:
            return "quatorze";
        case 15:
            return "quinze";
        case 16:
            return "seize";
        case 20:
            return "vingt";
        case 30:
            return "trente";
        case 40:
            return "quarante";
        case 50:
            return "cinquante";
        case 60:
            return "soixante";
        }
    }
    
    function lettreDizaines(inputDizaines) {
        switch (inputDizaines) {
        case 0:
            return "";
        case 1:
            return "cent";
        case 2:
            return "deux-cent";
        case 3:
            return "trois-cent";
        case 4:
            return "quatre-cent";
        case 5:
            return "cinq-cent";
        case 6:
            return "six-cent";
        case 7:
            return "sept-cent";
        case 8:
            return "huit-cent";
        case 9:
            return "neuf-cent";
        }
    }
    
    
    if (input < 10) {
        if (input === 0) {
            window.alert("zéro");
        } else {
            window.alert(lettreUnite(unites));
        }
    } else if ((input > 10) && (input < 100)) {
        if (unites !== 0) {
            window.alert(lettreDizaines(dizaines) + "-" + lettreUnite(unites));
        } else {
            window.alert(lettreDizaines(dizaines));
        }
    } else {
        if ((dizaines !== 0) && (unites !== 0)) {
            window.alert(lettreCentaines(centaines) + "-" + lettreDizaines(dizaines) + "-" + lettreUnite(unites));
        } else if ((dizaines === 0) && (unites !== 0)) {
            window.alert(lettreCentaines(centaines) + "-" + lettreUnite(unites));
        } else if ((dizaines !== 0) && (unites === 0)) {
            window.alert(lettreCentaines(centaines) + "-" + lettreDizaines(dizaines));
        } else if ((dizaines === 0) && (unites === 0)) {
            if (centaines === 1) {
                window.alert(lettreCentaines(centaines));
            } else {
                window.alert(lettreCentaines(centaines) + "s");
            }
        }
    }
}

var userNumber;

function checkRules(input, string) {
    "use strict";
    input = parseInt(window.prompt(string + "Entrez un nombre entre 0 et 999"), 10); // var input
    return input;
}

while (true) {
    if (isNaN(userNumber = checkRules(userNumber, ""))) {
        userNumber = checkRules(userNumber, "Ce n'est pas un nombre. ");
    } else if (userNumber > 999) {
        userNumber = parseInt(window.prompt("Ce nombre est supérieur à 999. Entrez un nombre entre 0 et 999"), 10);
    } else if (userNumber < 0) {
        userNumber = parseInt(window.prompt("Ce nombre est inférieur à 0. Entrez un nombre entre 0 et 999"), 10);
    } else {
        break;
    }
}

conversion(parseInt(userNumber));
