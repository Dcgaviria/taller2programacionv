/*En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este
ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad está entre
40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce la longitud del tramo en kilómetros: ", (longitud) => {
    rl.question("Introduce el tiempo empleado en horas: ", (tiempo) => {
        let velocidad = longitud / tiempo;

        if (velocidad >= 40 && velocidad <= 60) {
            console.log("El conductor pasa la prueba");
        } else {
            console.log("El conductor está descalificado");
        }

        rl.close();
    });
});