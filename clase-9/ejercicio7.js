const prompt = require("prompt-sync")({ sigint: true });

let kilos = parseFloat(prompt("Ingrese su peso en kg: "));
let libras = kilos * 2.20462;

console.log("Tu peso en libras es:", libras);
