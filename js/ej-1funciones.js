/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function get_paridad(num) {
  let paridad;
  if (num % 2 === 0) {
    paridad = "Es par.";
  } else {
    paridad = "Es impar.";
  }
  return paridad;
}

let numero = parseInt(prompt());

let resultado = get_paridad(numero);
document.write(resultado);
