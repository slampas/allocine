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
for (let f in acteurs[id].films){
    let a = document.createElement("a");
    a.innerHTML = films[acteurs[id].films[f]].titre;
    a.href = "../pages/film.html?id=" + acteurs[id].films[f];
    
    document.getElementById("list").insertBefore(a, document.getElementById("filmo").nextSibling);
}
