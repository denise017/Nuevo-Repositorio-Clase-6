const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Ingrese un numero: "));
let doble = numero * 2;

console.log("El doble del numero es:", doble);
