// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
// “cancelar” deberá indicarse la suma total de los números introducidos.
let opcion = true;
let suma = 0;

while (opcion) {
  opcion = confirm("¿Desea continuar?");
  if (!opcion) {
    break;
  }
  const Numero = parseInt(prompt("Ingrese un numero: "));
  if (!isNaN(Number(Numero)) && Numero > 0) {
    suma += Numero;
  } else {
    alert("Por favor ingrese un numero");
  }
}
//Mostramos la suma total de los numeros
document.writeln(`La suma total de los numeros ingresados es ${suma}`);
