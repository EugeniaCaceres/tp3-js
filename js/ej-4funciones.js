/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

function crear_tabla(numero) {
  let table =
    "<table>" +
    "<thead>" +
    "<tr>" +
    "<th>Operación</th>" +
    "<th>Valor</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>";

  for (let i = 1; i <= 10; i++) {
    table =
      table +
      "<tr>" +
      "<td>" +
      i +
      " x " +
      numero +
      "</td>" +
      "<td>" +
      i * numero +
      "</td>" +
      "</tr>";
  }

  table = table + "</tbody>" + "</table>";
  return table;
}

let numero = parseInt(prompt());
let resultado = crear_tabla(numero);

document.write(resultado)
