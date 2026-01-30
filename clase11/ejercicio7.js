// Pedimos los numeros y la operacion
let num1 = Number(prompt("Ingresa el primer numero"))
let num2 = Number(prompt("Ingresa el segundo numero"))
let operacion = prompt("Ingresa suma resta multiplicacion o division")

// Realizamos la operacion segun lo ingresado
switch (operacion) {
  case "suma":
    console.log(num1 + num2)
    break
  case "resta":
    console.log(num1 - num2)
    break
  case "multiplicacion":
    console.log(num1 * num2)
    break
  case "division":
    console.log(num1 / num2)
    break
  default:
    console.log("Operacion invalida")
}
