alert("Ingrese la cantidad de pasos que desee avanzar");

let frase = "Un paso al frente";

let consulta = parseInt(prompt('Ingrese la cantidad de números que desea repetir la frase " + frase + "'));

alert("Intente ingresar a su consola");

if (consulta <= 50) {
    for (let i = 1; i <= consulta; i++){
        console.log(frase + " x"+ i);
    }
    console.log("Has recorrido: "+ consulta + " pasos");
} else {
    console.log("Son demasiados pasos");
}
