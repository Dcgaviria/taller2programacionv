// Función para determinar el tipo de viaje y mostrar el mensaje correspondiente
function planificarViaje(tipoViaje) {
  switch (tipoViaje.toLowerCase()) {
    case "coche":
      console.log("¡Buen viaje en coche!");
      break;
    case "tren":
    case "autobús":
      console.log("¡Buen viaje! No olvides llevar dinero para el billete.");
      break;
    case "bicicleta":
      console.log("¡Buen viaje en bicicleta! ¡Pedalea con cuidado!");
      break;
    default:
      console.error("Error: Tipo de viaje no válido.");
  }
}

// Programa principal
const tipoViajeUsuario = process.argv[2]; // Acceder al segundo argumento (tipo de viaje)

if (tipoViajeUsuario) {
  planificarViaje(tipoViajeUsuario.toLowerCase());
} else {
  console.error("Error: No se ha especificado el tipo de viaje como argumento.");
}