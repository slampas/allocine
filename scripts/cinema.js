var slide = new Array("batman.JPG","lucy.jpg", "Avengers.jpg");
var titre = new Array ("BATMAN","Lucy","Avengers");
var description = new Array (" Alors que l'on attend The Batman de Matt Reeves et que Joker cartonne toujours dans les salles de cinéma, on ne peut oublier la trilogie The Dark Knight de Christopher Nolan. ",
"C'est mieux qu'un cours de biologie,  affirme un autre spectateur à l'AFP à la sortie  de la première projection française de Lucy.","  Nick Fury, désormais directeur de l'organisation de défense terrestre SHIELD, veut monter une équipe de super-héros ");
var numerotation = new Array ("1/3","2/3","3/3");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src ="../assets/"+slide[numero];
    document.getElementById("titre").innerHTML = titre[numero];
    document.getElementById("description").innerHTML = description[numero];
    
    document.getElementById("numero").innerHTML = numerotation[numero];
}


document.getElementById("slide").onclick = ()=> {
    location.href = "../pages/film.html?id=" + numero;
};


