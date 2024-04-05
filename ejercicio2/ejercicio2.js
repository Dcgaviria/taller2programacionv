/*Generar un código que determine si un numero es negativo, positivo o cero*/

const dataFromConsole = process.argv;

const numero =+dataFromConsole[2];

if (numero == 0)
    console.log("El número es cero")
else if (numero > 0)
    console.log("El número es positivo")
else 
console.log("El número es negativo") // para ejecutarlo en el npm hay que hacer npm run ejercicio -- el numero negativo