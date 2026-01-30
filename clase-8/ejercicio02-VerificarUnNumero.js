const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Ingrese un numero: "));

if (numero > 0) {
  console.log("El numero es positivo");
} else if (numero < 0) {
  console.log("El numero es negativo");
} else {
  console.log("El numero es cero");
}
