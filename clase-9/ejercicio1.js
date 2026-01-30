const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

if (numero1 > numero2) {
  console.log("El primer numero es mayor");
} else if (numero2 > numero1) {
  console.log("El segundo numero es mayor");
} else {
  console.log("Los numeros son iguales");
}
