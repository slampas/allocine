var slide = new Array("telechargement.jfif","adaptation-du-jeu.jpg", "BLACK-MESSIAH.jpg", "chloeZhao.jpg", "FRANCES.jpg","thecrow.jfif");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src ="../assets/"+slide[numero];
}