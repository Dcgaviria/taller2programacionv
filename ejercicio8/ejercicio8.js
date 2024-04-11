const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce tu edad: ", (edad) => {
    rl.question("Introduce tus ingresos: ", (ingreso) => {

        if (edad >= 16 && ingreso >= 1000) {
            console.log("debes tributar ");
        } else {
            console.log("no debes tributar");
        }

        rl.close();
    });
});