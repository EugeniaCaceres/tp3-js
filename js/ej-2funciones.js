/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function detectar_case(texto_parametro) {
  if (texto_parametro === texto_parametro.toUpperCase()) {
    document.write("Solo mayúsculas.");
  } else if (texto_parametro === texto_parametro.toLowerCase()) {
    document.write("Solo minúsculas.");
  } else {
    document.write("Minúsculas y mayúsculas.");
  }
}
let texto = prompt();
detectar_case(texto);
