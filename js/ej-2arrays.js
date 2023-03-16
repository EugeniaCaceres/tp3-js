/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let ciudades = [];
document.write("<H2>Ciudades: </H2>");

do {
  let ciudad = prompt(`Ingrese nombre de ciudades`);
  ciudades.push(ciudad);
} while (confirm("¿Quiere ingresar más ciudades?"));
ciudades.push('Paris')

document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  if (i == 0) {
    document.write("<li>" + ciudades[i] + "</li>");
  } else if (i == 2) {
    document.write("<li>" + ciudades[i] + "</li>");
  } else if (i == ciudades.length - 1) {
    document.write("<li>" + ciudades[i] + "</li>");
  } else if (i == 1) {
    document.write ("<li> Barcelona </li>")
  }
}

document.write("</ul>");
document.write("<p>" + ciudades.length + "</p>");
