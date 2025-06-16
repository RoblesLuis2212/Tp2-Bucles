//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al
//salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let opcion = true;
let resultado = "";

while (opcion) {
  opcion = confirm("¿Desea continuar?");
  if (!opcion) {
    break;
  }
  texto = prompt("Ingrese un texto: ");
  resultado += texto + " - ";
}
document.writeln(resultado);
