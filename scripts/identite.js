var morganFreeman = { prenomNom: "MORGAN FREEMAN", metier: "Acteur", naissance: "Américain", nationalite: "1 juin 1937 (Memphis, Tennessee - Etats-Unis)", age: "83 ans", biographie: "Morgan Freeman est diplômé du lycée de Greenwood, dans le Mississippi. A dix-huit ans, il s'engage dans l'Air Force et, une fois ses obligations militaires accomplies, s'installe en Californie pour étudier la danse et l'art dramatique au Los Angeles City College. C'est à Broadway qu'il fait ses débuts de comédien en 1967 dans la reprise de Hello Dolly !. La même année, il se fait remarquer, toujours au théâtre, pour son interprétation dans The Nigger lovers. A la télévision, c'est en incarnant le personnage populaire et récurrent d'Easy Rider dans la série The Electric Company qu'il se fait connaître du public américain.Morgan Freeman s'impose sur le tard au cinéma." };
var statistique = {carriere: 56, filmsSeries: 122, nominations: 6} ;

// fonction: qui permet au chargement de la page d'intégrer les informations sur l'identite d'une personne.
window.addEventListener("load", function (event) {
    document.getElementById("metier").innerHTML = "Métier " + identite["metier"];
    document.getElementById("metier").innerHTML = "Métier " + identite["metier"];
    document.getElementById("nationalite").innerHTML = "Nationalité  " + identite["nationalite"];
    document.getElementById("naissance").innerHTML = "Naissance " + identite["naissance"];
    document.getElementById("age").innerHTML = "Age " + identite["age"];
    document.getElementById("biographie").innerHTML = identite["biographie"];
});