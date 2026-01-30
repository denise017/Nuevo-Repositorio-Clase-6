// Pedimos un numero entero positivo
let numero = Number(prompt("Ingresa un numero positivo"))

// Buscamos los multiplos entre 1 y 100
for (let i = 1; i <= 100; i++) {
  if (i % numero === 0) {
    console.log(i)
  }
}
