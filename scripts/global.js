let redirect = (id, name) => {
    document.getElementById(id).onclick = function () {
        if (!location.href.endsWith("index.html"))
            name = "../" + name;
        location.href = name + ".html";
    };
};

redirect("logo", "index");

redirect("cinema", "pages/cinema");
redirect("series", "pages/series");
redirect("streaming", "pages/streaming");
redirect("news", "pages/news");

// ==============================================================
// Data

var films = [
    { titre: "The Dark Knight", date: "18 juillet 2008", real: "Christopher Nolan" },
    { titre: "Lucy", date: "6 aout 2014", real: "Luc Besson" },
    { titre: "Avengers", date: "25 avril 2012", real: "Joss Whedon" },
];

// Synopsis
var syno = [
    "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.",
    "A la suite de circonstances indépendantes de sa volonté, une jeune étudiante voit ses capacités intellectuelles se développer à l’infini. Elle « colonise » son cerveau, et acquiert des pouvoirs illimités.",
    "Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité..."
];

var acteurs = [
    { nom: "Christian Bale", metier: "Acteur", nationalite: "Américain", age: "47", anCarriere: 34, nbFilms: 54, prix: 6, id1: "0", film1: "Batman", id2: "1", film2: "-" },
    { nom: "Morgan Freeman", metier: "Acteur", nationalite: "Américain", age: "83", anCarriere: 56, nbFilms: 122, prix: 6, id1: "0", film1: "Batman", id2: "1", film2: "Lucy" },
    { nom: "Scarlett Johansson", metier: "Actrice", nationalite: "Américaine", age: "36", anCarriere: 26, nbFilms: 65, prix: 3, id1: "1", film1: "Lucy", id2: "2", film2: "Avengers" },
    { nom: "Robert Downey Jr.", metier: "Acteur", nationalite: "Américain", age: "56", anCarriere: 50, nbFilms: 99, prix: 4, id1: "2", film1: "Avengers", id2: "1", film2: "-" },
];

// Biographies
var bio = [
    "Originaire du Pays de Galles, Christian Bale apparaît dès l'âge de 8 ans dans des spots publicitaires et fait à 10 ans ses débuts d'acteur, en jouant au théâtre dans The Nerd, aux côtés de Rowan Atkinson. En 1987, il tourne son premier film, le conte fantastique Mio Min Mio et décroche le rôle principal de la fresque de Steven Spielberg, L'Empire du soleil. Son interprétation de jeune orphelin détenu dans un camp de concentration japonais lui vaut des critiques unanimes. Sa carrière lancée, il s'illustre dans quelques films à costumes comme Henry V (1991) de Kenneth Branagh, Les Quatre Filles du docteur March (1995), Portrait de femme (1996) de Jane Campion ou encore l'adaptation du roman L'Agent secret (1997) de Joseph Conrad, avant de s'immerger dans l'univers du glam rock pour les besoins de Velvet Goldmine (1998).",
    "Morgan Freeman est diplômé du lycée de Greenwood, dans le Mississippi. A dix-huit ans, il s'engage dans l'Air Force et, une fois ses obligations militaires accomplies, s'installe en Californie pour étudier la danse et l'art dramatique au Los Angeles City College. C'est à Broadway qu'il fait ses débuts de comédien en 1967 dans la reprise de Hello Dolly !. La même année, il se fait remarquer, toujours au théâtre, pour son interprétation dans The Nigger lovers. A la télévision, c'est en incarnant le personnage populaire et récurrent d'Easy Rider dans la série The Electric Company qu'il se fait connaître du public américain.",
    "Scarlett Johansson entame sa carrière de comédienne sur les planches de Broadway, à l'âge de huit ans, en tenant la vedette de la pièce Sophistry aux côtés d'Ethan Hawke. Au cinéma, c'est devant la caméra de Rob Reiner, pour la comédie L'Irrésistible North (1994) qu'elle fait ses premiers pas.",
    "Après des études à Los Angeles, Robert Downey Jr. s'installe à New York à l'âge de 16 ans pour y débuter une carrière de comédien. Il s'illustre notamment dans Baby, it's you (1983) et Une créature de rêve (1985), mais c'est en participant régulièrement à l'émission télévisée comique Saturday night live qu'il accède à la célébrité."
];
