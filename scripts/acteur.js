var identite = [
    { prenomNom: "CHRISTIAN BALE", metier: "Acteur", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum", id1: "0", film1: "batman", id2: "1", film2: "aucun" },
    { prenomNom: "MORGAN FREEMAN", metier: "Actrice", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum", id1: "0", film1: "batman", id2: "1", film2: "lucy" },
    { prenomNom: "SCARLETT JOHANSSON", metier: "Acteur", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum", id1: "1", film1: "lucy", id2: "2", film2: "avengers" },
    { prenomNom: "MORGAN FREEMAN", metier: "Acteur", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum", id1: "0", film1: "film1", id2: "1", film2: "film2" },
];

var statistique = {carriere: 56, filmsSeries: 122, nominations: 6} ;

let index = location.href.split("?id=")[1];

// fonction: qui permet au chargement de la page d'intégrer les informations sur l'identite d'une personne.
window.addEventListener("load", function (event) {
    document.getElementById("metier").innerHTML = "Métier " + identite[index]["metier"];
    document.getElementById("nationalite").innerHTML = "Nationalité  " + identite[index]["nationalite"];
    document.getElementById("naissance").innerHTML = "Naissance " + identite[index]["naissance"];
    document.getElementById("age").innerHTML = "Age " + identite[index]["age"];
    document.getElementById("biographie").innerHTML = identite[index]["biographie"];
    document.getElementById("photo").src = "../images/" + index + ".jpg";
    document.getElementById("film1").innerHTML = identite[index]["film1"];
    document.getElementById("film1").href += identite[index]["id1"];
    document.getElementById("film2").innerHTML = identite[index]["film2"];
    document.getElementById("film2").href += identite[index]["id2"];
});

document.getElementById("filmo").href += "?id="+index;