alert("Trabajando con objetos, responda las siguientes preguntas");

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));

let persona1 = [
    {id: 1, name: nombre, lName: apellido, years: edad },
    {id: 2, name: "Rosa", lName: "Gonzáles", years: 12 },
    {id: 3, name: "Roberto", lName: "Gutierrez", years: 20 },
    {id: 4, name: "Luis", lName: "Guando", years: 30 },
    {id: 5, name: "Alejandro", lName: "Malásquez", years: 25 },
    {id: 6, name: "María", lName: "Cárdenas", years: 17 },
    {id: 7, name: "Julio", lName: "Illanes", years: 16 },
    {id: 8, name: "Jaime", lName: "Canales", years: 22 },
    {id: 9, name: "Diana", lName: "Malásquez", years: 32 },
    {id: 10, name: "Josefina", lName: "Salinas", years: 25 },
    {id: 11, name: "Mario", lName: "Dolores", years: 15 }
];

console.log("Esta es la lista de usuarios registrados:");
console.log("Su registro es el número 1")
console.log(persona1);

alert("Puede proceder a revisar la consola");
