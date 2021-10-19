/* let deporteFavorito = prompt("Ingresa tu deporte favorito");

if (deporteFavorito == "Voley") {
    alert("Mi deporte favorito es el "+ deporteFavorito + "!");
} else if (deporteFavorito == "Ténis") {
    alert("Este deporte no me gusta, me gusta el voley");
} else {
    alert("Tu deporte favorito es el: " + deporteFavorito + " y el mío es el Voley");
}

let precio = parseFloat(prompt("¿Cuánto cuesta este producto?"));

if (precio > 1000) {
    alert("Demasiado caro! >:v");
} else if (precio > 50) {
    alert("Puede ser, no sé...");
} else {
    alert("Me llevo dos!");
}

let esMenor10 = (precio < 10);

if (esMenor10){
    alert("Compro mil!");
} else{
    alert("Es caro!");
}

let numero1 = 1;
let nunmeroUno = "1";

let numeros = (numero1 !== nunmeroUno)
alert("La variable numeros es: " + numeros);

let emma = prompt("tu nombre");

if ((emma == "Ema") || (emma == "ema") || (emma == "EMA")) {
    alert("Soy ema");
} else {
    alert("No soy ema")
} */

/*
    Pregunten al usuario cual es su edad y
    Según la respuesta, ponen los siguientes mensajes:
    - Si tiene entre 0 y 17 - Eres un niño!
    - si tiene entre 18 y 40 - Sos un joven!
    - Si tiene mas de 40 - ¿Trajiste bastón?
*/

let edad = prompt('¿Cuál es tu edad?');

if ((edad <= 17) && (edad >= 0)) {
    alert("Eres un niño!");
} else if ((edad >= 18) && (edad <= 40)) {
    alert("Sos un joven!");
} else if ((edad > 40)) {
    alert("¿Trajiste bastón?");
}