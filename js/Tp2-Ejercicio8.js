//Crear un script que genere una piramide desde el numero 1 hasta el numero que indique el usuario
let numeroRepeticiones = parseInt(prompt("Ingrese un numero del 1 al 50: "));
if (numeroRepeticiones > 50) {
  alert("Por favor ingrese un numero menor igual a 50");
} else {
  for (let fila = 0; fila <= numeroRepeticiones; fila++) {
    for (let columna = 0; columna <= fila; columna++) {
      document.writeln(columna + 1);
    }
    document.writeln(`<br>`);
  }
}
