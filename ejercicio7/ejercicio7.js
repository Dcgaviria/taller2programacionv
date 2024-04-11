/* 7. Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota
promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7
y Notable por encima de 7.*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce la nota del primer trimestre: ", (nota1) => {
    rl.question("Introduce la nota del segundo trimestre: ", (nota2) => {
        rl.question("Introduce la nota del tercer trimestre: ", (nota3) => {
            let notaPromedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

            if (notaPromedio < 5) {
                console.log("Suspenso");
            } else if (notaPromedio >= 5 && notaPromedio <= 7) {
                console.log("Aprobado");
            } else {
                console.log("Notable");
            }

            rl.close();
        });
    });
});
