let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

 receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
});

receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
});

console.log(receta.ingredientes[0].nombre);

let sumaCantidad = 0;
for (let index = 0; index < receta.ingredientes.length; index++) {
    sumaCantidad += receta.ingredientes[index].cantidad;   
}

console.log("La suma de todas las cantidades es: " + sumaCantidad);
