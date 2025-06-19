//Realiza un script que pida número de filas y columnas y escriba una tabla.
//Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.7
//Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//Pedir al usuario las filas y columnas
const filas = parseInt(prompt("Ingrese la cantidad de filas de la tabla: "));
const columnas = parseInt(
  prompt("Ingrese la cantidad de columnas de la tabla: ")
);
let numero = filas * columnas;
//dibujar la tabla
for (let i = 0; i <= filas; i++) {
  document.writeln("<tr>");
  for (let j = 0; j <= columnas; j++) {
    if (numero >= 1) {
      document.writeln(`<td>${numero}</td>`);
      numero--;
    }
  }
  document.writeln("</tr>");
  document.writeln("<br>");
}
// document.writeln(`<table>
//     <tbody>
//     </tbody>
//     </table>`);

// <td>35<td/>
// <td>35<td/>
// <td>35<td/>
// <td>35<td/>
