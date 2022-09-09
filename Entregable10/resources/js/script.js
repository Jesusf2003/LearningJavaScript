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

var k = '<tbody>'
for (i = 0; i < Persona.length; i++) {
    k += '<tr>';
    k += '<td width="5%">' + Persona[i].id + '</td>';
    k += '<td width="5%">' + Persona[i].lName + ', ' + Persona[i].name + '</td>';
    k += '<td width="5%">' + Persona[i].years + '</td>';
    k += '</tr>';
}
k += '</tbody>';
document.getElementById('tableData').innerHTML = k;