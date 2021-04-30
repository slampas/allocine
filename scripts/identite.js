var identite = [
    { prenomNom: "CHRISTIAN BALE", metier: "Acteur", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum" },
    { prenomNom: "MORGAN FREEMAN", metier: "Actrice", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum" },
    { prenomNom: "MORGAN FREEMAN", metier: "Acteur", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum" },
    { prenomNom: "SCARLETT JOHANSSON", metier: "Acteur", naissance: "Américain", nationalite: "xxxx", age: "xx ans", biographie: "Lorem ipsum" },
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
});