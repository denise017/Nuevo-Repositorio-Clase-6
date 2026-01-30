const prompt = require("prompt-sync")({ sigint: true });

let n1 = parseFloat(prompt("Ingrese el primer numero: "));
let n2 = parseFloat(prompt("Ingrese el segundo numero: "));
let n3 = parseFloat(prompt("Ingrese el tercer numero: "));

if (n1 >= n2 && n1 >= n3) {
  console.log("El mayor es:", n1);
} else if (n2 >= n1 && n2 >= n3) {
  console.log("El mayor es:", n2);
} else {
  console.log("El mayor es:", n3);
}
