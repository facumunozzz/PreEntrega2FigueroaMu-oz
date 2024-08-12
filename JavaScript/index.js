let zoologico = [];

class animal {
    constructor (nombre, especie, edad, alimentacion, peso) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.alimentacion = alimentacion;
        this.peso = peso;
    }
}

function pesoRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

function crearAnimal () {
    let nombre = prompt ("Ingrese el nombre del animal");
    let especie = prompt ("Ingrese la especie del animal");
    let edad = parseInt (prompt("Ingrese la edad del animal"));
    let alimentacion = prompt ("¿Es carnivoro, herviboro u omnivoro?");
    let peso = pesoRandom(50, 300);
    alert("¡Su animal ha sido pesado! Su peso es de " + peso + " kg");
    
    if (alimentacion==="carnivoro" || alimentacion === "herviboro" || alimentacion === "omnivoro") {
        let nuevoAnimal = new animal(nombre, especie, edad, alimentacion, peso)
        zoologico.push(nuevoAnimal);
    } else {
        alert ("el tipo de alimentacion no es correcto, ingrese los datos nuevamente")
        crearAnimal();
    }
}


function mostrarAnimalesEnZoologico() {
    if (zoologico.length === 0){
        alert ("El zoológico está vacío");
        return;
    } else if (zoologico.length === 1) {
        alert ("hay " + zoologico.length + " animal")
    } else if (zoologico.length > 1) {
        alert ("hay " + zoologico.length + " animales")
    }
}


crearAnimal();
mostrarAnimalesEnZoologico();
console.log (zoologico[0]);








