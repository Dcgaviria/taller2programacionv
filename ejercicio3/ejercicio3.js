//Generar un código determine la diferencia entre dos numeros de tal manera que la resta siempre se haga del numero mayor hacia el numero menor//


function subtractSmallerFromLarger(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

console.log(subtractSmallerFromLarger(5, 3)); // Output: 2
console.log(subtractSmallerFromLarger(10, 5)); // Output: 3