var identite = { metier: "R", nomdenaissance: "O", nationalite: "A", naissance: "I", age: "1", biographie: "Lorem Ipsum" };

// fonction: qui permet au chargement de la page d'intégrer les informations sur l'identite d'une personne.
window.addEventListener("load", function (event) {
    document.getElementById("metier").innerHTML = "Métier " + identite["metier"];
    document.getElementById("nomdenaissance").innerHTML = "Nom de naissance  " + identite["nomdenaissance"];
    document.getElementById("nationalite").innerHTML = "Nationalité  " + identite["nationalite"];
    document.getElementById("naissance").innerHTML = "Naissance " + identite["naissance"];
    document.getElementById("age").innerHTML = "Age " + identite["age"];
    document.getElementById("biographie").innerHTML = identite["biographie"];
});