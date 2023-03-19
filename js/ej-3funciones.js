/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/
function calcular(lado_a, lado_b) {
  let perímetro = 2 * (lado_a + lado_b);
  return perímetro;
}

let lado_a = parseInt(prompt("Ingrese valor de lado a."));
let lado_b = parseInt(prompt("Ingrese valor de lado b."));

let resultado = calcular(lado_a, lado_b);
document.write("El perimetro es:", resultado);
