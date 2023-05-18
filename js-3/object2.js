let persona = {
    nombre: "Alejandro Garcia",
    edad: 30,
    ciudad: "Ciudad de Mexico",
    profesion: "Astrofisico" 
}

for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
       console.log(llave + ": " + persona[llave])
     }
}

function presentacion(objeto){
    return "Mi nombre es " + objeto.nombre + ", tengo " + objeto.edad + " años y vivo en " + objeto.ciudad;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["nadar", "tocar guitarra", "correr", "leer"];

console.log(persona.hobbies);

for (let index = 0; index < persona.hobbies.length; index++) {
    console.log(persona.hobbies[index]); 
}