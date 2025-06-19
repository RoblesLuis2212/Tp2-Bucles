//Realizar un script que escriba una piramide inversa del numero 1
//hasta el numero que indique el usuario
//No debe ser mayor a 50
const numero = parseInt(prompt("Ingrese un numero: "));

if (numero > 50) {
  alert("Por favor ingrese un numero menor a 50");
} else {
  for (let fila = numero; fila >= 1; fila--) {
    for (let columna = 1; columna <= fila; columna++) {
      document.writeln(fila);
    }
    document.writeln("<br>");
  }
}
