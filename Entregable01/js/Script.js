alert("Hola, bienvenido a la página de la bodega Zapata - Lunahuaná");

let nombre = prompt("Ingrese sus nombres: ");

let apellido = prompt("Ingrese sus apellidos: ");

let edad = prompt("Por favor, ingresa tu edad: ");

alert("Bienvenido "+ nombre + " " + apellido);

alert("Listo, ahora que has ingresado tus datos, puedes acceder a nuestra página.");

let question = prompt("¿Se ha registrado anteriormente a nuestra página?");

let confirm;

if (question == "Si" || edad >= 18) {
    alert("Bien, usted tiene suficiente edad para registrarse a nuestra tienda");
    confirm = true;
} else if (question == "No" || edad < 18) {
    confirm = false;
    alert("Hum..., hemos revisado su edad y parece que es demasiado joven para acceder a nuestra página,"
        + "vuelva cuando cumpla con la edad requerida.");
}

if (confirm == true) {
    alert("Bien, entonces deberá ingresar su usuario y contraseña.");
} else if (confirm == false) {
    alert("¿No se ha registrado aún?, entonces proceda a crearse una cuenta y vuelva después");
}