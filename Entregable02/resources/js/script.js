let edad = prompt("Hola, ingresa una edad: ");

if (edad <= 6 && edad >= 0) {
    alert("Estás en la infancia");
} else if (edad > 6 && edad <= 12) {
    alert("Estás en la niñéz");
} else if (edad > 12 && edad <= 20) {
    alert("Estás en la adolescencia");
} else if (edad > 20 && edad <= 25) {
    alert("Estás en juventud");
} else if (edad > 25 && edad <= 60) {
    alert("Estás en adultéz");
} else if (edad > 60) {
    alert("Estás en la ancianidad");
}