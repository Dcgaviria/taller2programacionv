/*En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este
ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad está entre
40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/
function checkDriverSpeed(tramoLength, timeEmpleado) {
    tramoLength = parseFloat(tramoLength);
    timeEmpleado = parseFloat(timeEmpleado);
    speed = tramoLength / timeEmpleado;
    if (40 <= speed && speed <= 60) {
      return "The conductor paso la  prueba.";
    } else {
      return "The conductor esta descalificado.";
    }
  }
  
  // Test the function
  console.log(checkDriverSpeed(100, 1.5)); // Output: The driver passes the prueba.
  console.log(checkDriverSpeed(100, 2.5)); // Output: The driver is descalificado.
  console.log(checkDriverSpeed(100, 1)); // Output: The driver is descalificado.