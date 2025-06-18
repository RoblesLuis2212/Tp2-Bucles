//Crea un script que escriba los números del 1 al 500, que indique cuáles son
//múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
for (let fila = 1; fila <= 500; fila++) {
  document.writeln(fila);
  if (fila % 4 == 0) {
    document.writeln("(Multiplo de 4)");
  }
  if (fila % 9 == 0) {
    document.writeln("(Multiplo de 9)");
  }
  if (fila % 5 == 0) {
    document.writeln("<br>-------------------------");
  }
  document.writeln("<br>");
}
