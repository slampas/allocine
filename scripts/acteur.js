// Recupère l'id dans l'url
let id = location.href.split("?id=")[1];

// Integre les informations de la personne en fonction de son id
document.getElementById("nom").innerHTML = acteurs[id].nom;
document.getElementById("metier").innerHTML = acteurs[id].metier;
document.getElementById("nation").innerHTML = acteurs[id].nationalite;
document.getElementById("age").innerHTML = acteurs[id].age;
document.getElementById("bio").innerHTML = bio[id];
document.getElementById("photo").src = "../assets/images/personnes/" + id + ".jpg";

// Ajoute les liens vers ses films
document.getElementById("film1").innerHTML = acteurs[id].film1;
document.getElementById("film1").href += acteurs[id].id1;
document.getElementById("film2").innerHTML = acteurs[id].film2;
document.getElementById("film2").href += acteurs[id].id2;
