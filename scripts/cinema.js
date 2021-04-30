let description = [
    "Alors que l'on attend The Batman de Matt Reeves et que Joker cartonne toujours dans les salles de cinéma, on ne peut oublier la trilogie The Dark Knight de Christopher Nolan",
    "C'est mieux qu'un cours de biologie, affirme un autre spectateur à l'AFP à la sortie  de la première projection française de Lucy",
    "Nick Fury, désormais directeur de l'organisation de défense terrestre SHIELD, veut monter une équipe de super-héros"
];

// ========================================

let numero = 0;

function changeSlide(sens) {
    numero = (numero + sens + 3) % 3;

    document.getElementById("slide").src = "../assets/images/carrousel/" + numero + ".jpg";
    document.getElementById("titre").innerHTML = films[numero].titre;
    document.getElementById("description").innerHTML = description[numero];

    document.getElementById("numero").innerHTML = (numero + 1) + "/3";
}

// ========================================

document.getElementById("slide").onclick = () => {
    location.href = "../pages/film.html?id=" + numero;
};

// ========================================

changeSlide(0);
