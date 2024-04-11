const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce tus ingresos: ", (ingreso) => {
    let renta = parseFloat(ingreso);

    if (renta < 10000) {
        console.log("Tipo impositivo 5%");
    } else if (renta >= 10000 && renta < 20000) {
        console.log("Tipo impositivo 15%");
    } else if (renta >= 20000 && renta < 35000) {
        console.log("Tipo impositivo 20%");
    } else if (renta >= 35000 && renta < 60000) {
        console.log("Tipo impositivo 30%");
    } else if (renta > 60000) {
        console.log("Tipo impositivo 45%");
    }

    rl.close();
});
