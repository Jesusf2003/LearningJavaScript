let entrada = parseInt(prompt("Ingrese un número"));
let entrada2 = parseInt(prompt("Ingrese otro número"));
let consulta = prompt("Qué desea hacer? 1 = Sumar, 2 = Restar, 3 = Multiplicar");

function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log("El resultado es: "+ resultado);
}

function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log("El resultado es: " + resultado);
    console.log("");
}

function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    console.log("El resultado es: "+ resultado);
}

if (consulta == 1) {
    sumar(entrada, entrada2);
} else if (consulta == 2) {
    restar(entrada, entrada2);
} else if (consulta == 3) {
    multiplicar(entrada, entrada2);
}

alert("Puede proceder a revisar la consola para ver el resultado");