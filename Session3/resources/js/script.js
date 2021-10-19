console.log(" archivo index");

let usuario = "jonathan";

console.log(usuario);
usuario = "Victoria";

const tienda = "falabella";

let numeroString = "12";
let string = "ejemplo";
let number = 2.3;
let agregar_Carrito = true;

let sumados = parseInt(numeroString) + number;
console.log(sumados);

let producto = ["celular", "computadora"];

var numeroCelular = prompt("Ingrese numero celular");
let numeroUsuario;

if (numeroCelular == 0 || numeroCelular == "") {
    alert("Ingrese un num de celular válido");
} else {
    numeroUsuario = numeroCelular;
    alert("Numero registrado");
}