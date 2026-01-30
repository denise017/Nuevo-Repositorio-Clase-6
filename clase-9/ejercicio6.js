
const prompt = require("prompt-sync")({ sigint: true });

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}
