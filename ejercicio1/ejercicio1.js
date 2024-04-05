//generar codigo determine si un numero es par o impar//

const isEven = (number) => {
    if (typeof number!== "number") {
      return console.log("Please enter a number");
    }
  
    if (number % 2 === 0) {
      return console.log(`The number ${number} is even`);
    } else {
      return console.log(`The number ${number} is odd`);
    }
  };
  
  isEven(5);
  isEven(6);