let Producto = [
    {id: 1, nombre: "Marqués de murrieta", cosecha: "2021", precio: 10.20, stock: 10 },
    {id: 2, nombre: "Pinot", cosecha: "1691", precio: 5.15, stock: 10 },
    {id: 3, nombre: "Mayacamas", cosecha: "1996", precio: 50.30, stock: 10 },
    {id: 4, nombre: "Massolino", cosecha: "1785", precio: 30.50, stock: 10 },
    {id: 5, nombre: "Chacayes", cosecha: "2009", precio: 16.10, stock: 10 }
];

document.querySelector("div").innerHTML = JSON.stringify(Producto);
