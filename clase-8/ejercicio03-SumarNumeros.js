const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

let suma = num1 + num2;

console.log("El resultado de la suma es:", suma);
