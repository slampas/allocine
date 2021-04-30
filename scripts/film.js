let films = [
    {titre: "The Dark Knight", date: "18 juillet 2008", real: "Christopher Nolan"},
    {titre: "Lucy", date: "6 aout 2014", real: "Luc Besson"},
    {titre: "Avengers", date: "25 avril 2012", real: "Joss Whedon"},
];

// Synopsis
let syno = [
    "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.",
    "A la suite de circonstances indépendantes de sa volonté, une jeune étudiante voit ses capacités intellectuelles se développer à l’infini. Elle « colonise » son cerveau, et acquiert des pouvoirs illimités.",
    "Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité..."
];

let img = ["batman", "lucy", "avengers"];

let acteurs = [[0, 1], [1, 2], [2, 3]];

// Recupère l'id dans l'url
let index = location.href.split("?id=")[1];

// Integre les informations du film en fonction de son id
document.getElementById("affiche").src = "../assets/images/affiches/" + img[index] + ".jpg";
document.getElementById("titre").innerHTML = films[index].titre;
document.getElementById("date").innerHTML = films[index].date;
document.getElementById("real").innerHTML = films[index].real;
document.getElementById("syno").innerHTML = syno[index];
