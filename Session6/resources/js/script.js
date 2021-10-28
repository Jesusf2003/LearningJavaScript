console.log(document.getElementById("myId"));

console.log(document.getElementsByClassName("parrafo"));

console.log(document.getElementsByTagName("p"));

console.log(document.getElementsByTagName("p")[2]);

document.getElementsByTagName("p")[2].textContent = "Este es un párrafo creado por JavaScript";

console.log(document.querySelector("p"));

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".parrafo"));

console.log(document.querySelectorAll("#myId"));

document.querySelector("#myId").style.color = "red";

document.querySelector("#myId").style.display = "none";

document.querySelector("#myId").setAttribute("class", "parrafo");

let listarElementos = document.querySelectorAll("li");
