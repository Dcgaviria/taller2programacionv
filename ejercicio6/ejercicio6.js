// Función para calcular el descuento por cantidad
function calcularDescuentoPorCantidad(numeroArticulos, precioArticulo) {
    if (numeroArticulos => 10 && precioArticulo > 40) {
      const descuento = 0.15; // Porcentaje de descuento (15%)
      const descuentoTotal = numeroArticulos * precioArticulo * descuento;
      const precioFinal = numeroArticulos * precioArticulo - descuentoTotal;
      console.log("¡Felicidades! Recibes un descuento del 15% por cantidad.");
      console.log(`Precio final: ${precioFinal.toFixed(2)}€`);
    } else {
      const precioTotal = numeroArticulos * precioArticulo;
      console.log(`Precio total: ${precioTotal.toFixed(2)}€`);
    }
  }
  
  // Programa principal
  const numeroArticulos = parseInt(process.argv[2]); // Acceder al segundo argumento (número de artículos)
  const precioArticulo = parseFloat(process.argv[3]); // Acceder al tercer argumento (precio por artículo)
  
  if (numeroArticulos && precioArticulo) {
    calcularDescuentoPorCantidad(numeroArticulos, precioArticulo);
  } else {
    console.error("Error: Debes ingresar el número de artículos y el precio por artículo como argumentos.");
  }