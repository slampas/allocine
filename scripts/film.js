let img = ["batman", "lucy", "avengers"];

let acteurs = [[0, 1], [1, 2], [2, 3]];

let index = location.href.split("?id=")[1];

document.getElementById("affiche").src = "../assets/images/affiches/" + img[index] + ".jpg";
document.getElementById("titre").innerHTML = img[index];
