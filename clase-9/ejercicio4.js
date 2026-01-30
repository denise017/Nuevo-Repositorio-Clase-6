const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
const MI_NOMBRE = "Ada"; // podes cambiarlo por el tuyo

if (nombre === MI_NOMBRE) {
  console.log("El nombre coincide");
} else {
  console.log("El nombre no coincide");
}
