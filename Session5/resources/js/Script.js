// let num1 = 56;

// console.log(num1);

const mascota1 = {
    nombre: "Tita",
    tipo: "perro",
    dueno: {
        nombre: "Fernando",
        apellido: "Canales"
    },
    edad: 4,
    castrado: false
};

// console.log(mascota1);

// // Forma actual de ver las propiedades
// console.log("El propietario es: " + mascota1.dueno.apellido + ", " + mascota1.dueno.nombre);

// // Creación de una función - constructor
function mascotas(nombre, tipo, dueno, edad, castrado){
    this.nombre = nombre;
    this.tipo = tipo;
    this.dueno = dueno;
    this.edad = edad;
    this.castrado = castrado;
    this.precio = precio;
    this.descuento = descuento;
    this.bio = () => {
        console.log("Esta mascota se llama: "+ this.nombre + " y tiene "+ this.edad + " años.");
    }
    this.castration = () => {
        if (castrado == true) {
            descuento = 50;
        }
    }
}

// const lily = new mascota1("Lily", "Gato", "Ysabel", 1, false);
// console.log(lily);

// const hana = new mascota1("Hannah", "Gato", "Anita", 5, false);
// console.log(hana);

// consola.log(mascota2.bio());

// const crearMascota = () => {
//     let nombreMascota = prompt("Ingresa el nombre de tu mascota.");
//     let tipoMascota = prompt("¿Qué tipo de mascota es?");
//     let nombreDueno = prompt("¿Cómo te llamas?");
//     let edadMascota = Number(prompt("¿Qué edad tiene?"));
//     let estCastrado = prompt("¿Está castrado?");

//     const mascota2 = new mascotas(nombreMascota, tipoMascota, nombreDueno, edadMascota, estCastrado);
//     console.log(mascota2);
// }

class Mascota{
    constructor(nombre, tipo, dueno, edad, castrado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.dueno = dueno;
        this.edad = edad;
        this.castrado = castrado;
    }
}
