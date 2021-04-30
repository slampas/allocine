// Recupère l'id dans l'url
let index = location.href.split("?id=")[1];

// Integre les informations du film en fonction de son id
document.getElementById("affiche").src = "../assets/images/affiches/" + index + ".jpg";
document.getElementById("titre").innerHTML = films[index].titre;
document.getElementById("date").innerHTML = films[index].date;
document.getElementById("real").innerHTML = films[index].real;
document.getElementById("syno").innerHTML = syno[index];
