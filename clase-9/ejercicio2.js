const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

let numero = parseFloat(prompt("Ingrese un numero: "));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log("El numero esta dentro del rango");
} else {
  console.log("El numero esta fuera del rango");
}
