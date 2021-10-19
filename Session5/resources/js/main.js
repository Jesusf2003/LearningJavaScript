/*

1.- Crear una clase con un constructor para productos que acepte nombre, categoría, precio, descuento, stock.

2.- Crear un método que aplique un 10% de descuento si el precio es mayor a 1000 y del 5% si es mayor.
    Mostrar el precio final.

3.- Crear un método que se llama comprar y que acepte cantidad como parámetro. Este método actualizará el
    stock y me diga cuántos quedan.

*/

class Productos{
    constructor(nombre, categoria, precio, descuento, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.descuento = descuento;
        this.stock = stock;
    }

    calcularDescuento() {
        if (this.precio > 1000) {
            this.precio = this.precio * 0.9;
            console.log(this.precio);
        } else {
            this.precio = this.precio * 0.95;
            console.log(this.precio);
        }
    }

    comprar(cantidad) {
        if (this.stock > cantidad) {
            this.stock = this.stock - cantidad;
            console.log("Compraste "+ cantidad + ", quedan "+ this.stock +", el costo final es de "+ (this.precio * cantidad));
        } else {
            console.log("Solo quedan: "+ this.stock);
        }
    }
}

const producto1 = new Productos("Tele", "electro", 1500, 10);
console.log(producto1);
producto1.calcularDescuento();
producto1.comprar(3);
