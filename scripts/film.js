// Recupère l'id dans l'url
let id = location.href.split("?id=")[1];

// Integre les informations du film en fonction de son id
document.getElementById("affiche").src = "../assets/images/affiches/" + id + ".jpg";
document.getElementById("titre").innerHTML = films[id].titre;
document.getElementById("date").innerHTML = films[id].date;
document.getElementById("real").innerHTML = films[id].real;
document.getElementById("syno").innerHTML = syno[id];

console.log(id + " " + films[id].acteurs);

// Ajoute les liens vers les acteurs
for (let ac in films[id].acteurs){
    console.log(ac);
    let a = document.createElement("a");
    a.innerHTML = acteurs[films[id].acteurs[ac]].nom;
    a.href = "../pages/acteur.html?id=" + films[id].acteurs[ac];
    
    document.getElementById("list").insertBefore(a, document.getElementById("acteurs").nextSibling);
}