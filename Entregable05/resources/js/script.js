alert("Calculando el IVA de diferentes países y sus tipos");

let sueldo = prompt("Ingrese un precio (00.00)");
let consulta = prompt("Ingrese un número del 1 al 4 - 1 = Argentina, 2 = España, 3 = Paraguay, 4 = Perú");

function argentina(ingreso) {
    console.log("Usted eligio Argentina");
    let aument = ingreso * 0.27;
    let general = ingreso * 0.21;
    let reduc = ingreso * 0.1025;
    let supReduc = sueldo * 0.025;
    console.log("Aumentado: S/." + aument);
    console.log("General: S/." + general);
    console.log("Reducido: S/." + reduc);
    console.log("Super reducido: S/." + supReduc);
    let respuesta = prompt("¿Desea ver la suma de todo? S = si y N = no");
    if (respuesta == "S") {
        console.log("Ok");
        console.log("Sumando todo sería: "+ (general + general + reduc + supReduc));
    } else if(respuesta == "N"){
        console.log("De acuerdo");
    }
}

function espana(ingreso) {
    console.log("Usted eligió España");
    let general = ingreso * 0.21;
    let reduc = ingreso * 0.1025;
    let supReduc = ingreso * 0.025;
    console.log("General: S/." + general);
    console.log("Reducido: S/." + reduc);
    console.log("Super reducido: S/." + supReduc);
    let respuesta = prompt("¿Desea ver la suma de todo? S = si y N = no");
    if (respuesta == "S") {
        console.log("Ok");
        console.log("Sumando todo sería: "+ (general + reduc + supReduc));
    } else if(respuesta == "N"){
        console.log("De acuerdo");
    }
}

function paraguay(ingreso) {
    console.log("Usted eligió Paraguay");
    let general = ingreso * 0.21;
    let reduc = ingreso * 0.1025;
    let respuesta = prompt("¿Desea ver la suma de todo? S = si y N = no");
    console.log("General: S/." + general);
    console.log("Reducido: S/." + reduc);
    if (respuesta == "S") {
        console.log("Ok");
        console.log("Sumando todo sería: "+ (general + reduc));
    } else if(respuesta == "N"){
        console.log("De acuerdo");
    }
}

function peru(ingreso) {
    console.log("Usted eligió Perú");
    let general = ingreso * 0.21;
    console.log("General: S/." + general);
    let respuesta = prompt("¿Desea sumar todo? S = si y N = no");
    if (respuesta == "S") {
        console.log("Ok");
        console.log("Sumando todo sería: "+ (general));
    } else if(respuesta == "N"){
        console.log("De acuerdo");
    }

}

alert("Puede proceder a revisar la consola");

if (consulta == 1) {
    argentina(sueldo);
} else if (consulta == 2) {
    espana(sueldo);
} else if (consulta == 3) {
    paraguay(sueldo);
} else if (consulta == 4) {
    peru(sueldo);
} else {
    console.log("Intente ingresar un valor del 1 al 4 por favor.");
}