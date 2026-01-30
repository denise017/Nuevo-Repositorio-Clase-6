// Pedimos el inicio y el fin
let inicio = Number(prompt("Ingresa el numero inicial"))
let fin = Number(prompt("Ingresa el numero final"))

// Validamos que los valores sean correctos
if (inicio > fin) {
  console.log("Los valores son invalidos")
} else {
  // Recorremos los numeros entre inicio y fin
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
