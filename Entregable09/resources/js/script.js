let consulta = parseInt(prompt("Ordenando objetos: 1=edad, 2=id."));
alert("Puede proceder a revisar la consola");

let Persona = [
    {id: 1, name: "Fernando", lName: "Canales", years: 18 },
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

if (consulta == 1) {
    console.log("Ordenado por edad ascendente");
    Persona.sort((a, b) => a.years - b.years);
    console.log(Persona);
} else if (consulta == 2) {
    console.log("Ordenado por id descendente");
    Persona.sort((a, b) => b.id - a.id);
    console.log(Persona);
}
