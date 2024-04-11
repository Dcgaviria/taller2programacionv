// Función para determinar la obligación de tributar
function debeTributar(edad, ingresosMensuales) {
    if (edad >= 16 && ingresosMensuales >= 1000) {
      console.log("El usuario debe tributar.");
    } else {
      console.log("El usuario no está obligado a tributar.");
    }
  }
  
  // Programa principal
  const edadUsuario = parseInt(prompt("Ingrese su edad: "));
  const ingresosUsuario = parseFloat(prompt("Ingrese sus ingresos mensuales (€): "));
  
  debeTributar(edadUsuario, ingresosUsuario);