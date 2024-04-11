/* /* 9. Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre.
El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un
nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario
su nombre y sexo, y muestre por pantalla el grupo que le corresponde..*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce tu sexo (M o H): ", function(sexo) {
    rl.question("Introduce tu nombre: ", function(nombre) {
        let grupo = '';

        if (sexo === 'M' && nombre[0] < 'M') {
            grupo = 'Grupo A';
        } else if (sexo === 'H' && nombre[0] > 'N') {
            grupo = 'Grupo A';
        } else {
            grupo = 'Grupo B';
        }

        console.log("El alumno " + nombre + " pertenece al grupo " + grupo);

        rl.close();
    });
});