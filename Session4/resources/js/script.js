// function suma(num1, num2, num3) {
//     console.log(num1 + num2);
//     let resultado = (num1 + num2) / num3;
//     return resultado;
// }

// suma(40, 20);
// let numero1 = 50;
// let numero2 = 30;
// let numero3 = 75;
// let numero4 = 46;

// suma(numero1, numero2);

let valorFinal;
function valorProducto(precio, descuento) {
    let valorFinal = precio - (precio * descuento / 100);
    alert(valorFinal);
    return valorFinal;
}

valorProducto(1000, 15);

function productoNuevo() {
    let precioLista = parseInt("Ingrese el precio de lista: ");
    let descuento = parseInt("Ingrese el descuento: ");
    let precioFinal = valorProducto(precioLista, descuento);
}

productoNuevo();

