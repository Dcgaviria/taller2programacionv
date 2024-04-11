const dataFromConsole = process.argv;
function tipoDeViaje() {
    const tipo = prompt("¿Cómo va a viajar? (coche, tren, bicicleta, autobús): ").toLowerCase();
    return tipo;
  }
  

  function recordarBillete(tipoViaje) {
    if (tipoViaje === "tren" || tipoViaje === "autobús") {
      console.log("¡No olvides llevar dinero para el billete!");
    }
  }
  

  const tipoViajeUsuario = tipoDeViaje();
  recordarBillete(tipoViajeUsuario);