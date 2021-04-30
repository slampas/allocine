var slide = new Array("telechargement.jfif","adaptation-du-jeu.jpg", "BLACK-MESSIAH.jpg");
var titre = new Array ("Titre 1","Titre 2","Titre 3");
var description = new Array ("  Pierre Lapin est de retour pour de nouvelles aventures à découvrir le 30 juin prochain "," lorem lorem lorem lorem prochain ");
var numerotation = new Array ("1/2","2/3","3/3");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src ="../assets/"+slide[numero];
    document.getElementById("titre").innerHTML = titre[numero];
    document.getElementById("titre").innerHTML = description[numero];
}