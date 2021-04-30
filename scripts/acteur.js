let acteurs = [
    { nom: "Christian Bale", metier: "Acteur", nationalite: "Américain", age: "47", anCarriere: 34, nbFilms: 54, prix: 6, id1: "0", film1: "Batman", id2: "1", film2: "-" },
    { nom: "Morgan Freeman", metier: "Acteur", nationalite: "Américain", age: "83", anCarriere: 56, nbFilms: 122, prix: 6, id1: "0", film1: "Batman", id2: "1", film2: "Lucy" },
    { nom: "Scarlett Johansson", metier: "Actrice", nationalite: "Américaine", age: "36", anCarriere: 26, nbFilms: 65, prix: 3, id1: "1", film1: "Lucy", id2: "2", film2: "Avengers" },
    { nom: "Robert Downey Jr.", metier: "Acteur", nationalite: "Américain", age: "56", anCarriere: 50, nbFilms: 99, prix: 4, id1: "2", film1: "Avengers", id2: "1", film2: "-" },
];

// Biographies
let bio = [
    "Originaire du Pays de Galles, Christian Bale apparaît dès l'âge de 8 ans dans des spots publicitaires et fait à 10 ans ses débuts d'acteur, en jouant au théâtre dans The Nerd, aux côtés de Rowan Atkinson. En 1987, il tourne son premier film, le conte fantastique Mio Min Mio et décroche le rôle principal de la fresque de Steven Spielberg, L'Empire du soleil. Son interprétation de jeune orphelin détenu dans un camp de concentration japonais lui vaut des critiques unanimes. Sa carrière lancée, il s'illustre dans quelques films à costumes comme Henry V (1991) de Kenneth Branagh, Les Quatre Filles du docteur March (1995), Portrait de femme (1996) de Jane Campion ou encore l'adaptation du roman L'Agent secret (1997) de Joseph Conrad, avant de s'immerger dans l'univers du glam rock pour les besoins de Velvet Goldmine (1998).",
    "Morgan Freeman est diplômé du lycée de Greenwood, dans le Mississippi. A dix-huit ans, il s'engage dans l'Air Force et, une fois ses obligations militaires accomplies, s'installe en Californie pour étudier la danse et l'art dramatique au Los Angeles City College. C'est à Broadway qu'il fait ses débuts de comédien en 1967 dans la reprise de Hello Dolly !. La même année, il se fait remarquer, toujours au théâtre, pour son interprétation dans The Nigger lovers. A la télévision, c'est en incarnant le personnage populaire et récurrent d'Easy Rider dans la série The Electric Company qu'il se fait connaître du public américain.",
    "Scarlett Johansson entame sa carrière de comédienne sur les planches de Broadway, à l'âge de huit ans, en tenant la vedette de la pièce Sophistry aux côtés d'Ethan Hawke. Au cinéma, c'est devant la caméra de Rob Reiner, pour la comédie L'Irrésistible North (1994) qu'elle fait ses premiers pas.",
    "Après des études à Los Angeles, Robert Downey Jr. s'installe à New York à l'âge de 16 ans pour y débuter une carrière de comédien. Il s'illustre notamment dans Baby, it's you (1983) et Une créature de rêve (1985), mais c'est en participant régulièrement à l'émission télévisée comique Saturday night live qu'il accède à la célébrité."
];

// Recupère l'id dans l'url
let id = location.href.split("?id=")[1];

// Integre les informations de la personne en fonction de son id
document.getElementById("nom").innerHTML = acteurs[id]["nom"];
document.getElementById("metier").innerHTML = acteurs[id]["metier"];
document.getElementById("nation").innerHTML =  acteurs[id]["nationalite"];
document.getElementById("age").innerHTML = acteurs[id]["age"];
document.getElementById("bio").innerHTML = bio[id];
document.getElementById("photo").src = "../images/" + id + ".jpg";

// Ajoute les liens vers ses films
document.getElementById("film1").innerHTML = acteurs[id]["film1"];
document.getElementById("film1").href += acteurs[id]["id1"];
document.getElementById("film2").innerHTML = acteurs[id]["film2"];
document.getElementById("film2").href += acteurs[id]["id2"];
