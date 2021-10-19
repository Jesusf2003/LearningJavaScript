// Curso de JavaScript

/*Comentario en bloques*/

// var edad = 25;
let nombre = "Juan";

//var anioNacimiento = 2002;

var anio = 2021;

// ¿Cuál es mi edad?
let edad;

var apellido = "Gomez";

const ESPACIO = " ";

// Nombre completo
var nombreCompleto = nombre + ESPACIO + apellido;

// Consola
console.log("Bienvenido, llegaste a la consola.");
console.log(edad);
console.log("Tu edad es: "+ edad);

// Prompt
var color = prompt("¿Cuál es tu color favorito?");
console.log("Tu color favorito es: " + color);

// Alerta
alert("Tu color favorito es: " + color);

let anioNacimiento = parseInt(prompt("¿En que anio naciste?"));
let edadCalculada = anio - anioNacimiento;
alert("Tu edad es: " + edadCalculada);