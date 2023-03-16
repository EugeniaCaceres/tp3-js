/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

let resultadosuma = [];

for (i = 1; i <= 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  resultadosuma.push(suma);
}
//esto es un diccionario para guardar las apariciones
let counts = {};

for (let i = 0; i < resultadosuma.length; i++) {
  let num = resultadosuma[i];
  if (counts[num]) {
    counts[num]++;
  } else {
    counts[num] = 1;
  }
}
let table = "<table><tr><th>Dado</th><th>Apariciones</th></tr>";
for (let key in counts) {
  table += "<tr><td>" + key + "</td><td>" + counts[key] + "</td></tr>";
}
table += "</table>";

document.write(table);

