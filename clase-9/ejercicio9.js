const prompt = require("prompt-sync")({ sigint: true });

const PI = 3.14159;

let radio = parseFloat(prompt("Ingrese el radio del circulo: "));

let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

console.log("Area:", area);
console.log("Perimetro:", perimetro);
