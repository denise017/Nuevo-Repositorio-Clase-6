const prompt = require("prompt-sync")({ sigint: true });

let condicion1 = prompt("Ingrese true o false para condicion1: ") === "true";
let condicion2 = prompt("Ingrese true o false para condicion2: ") === "true";

console.log("condicion1 AND condicion2:", condicion1 && condicion2);
console.log("condicion1 OR condicion2:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
