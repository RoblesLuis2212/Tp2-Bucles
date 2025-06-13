//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
//mensaje que ya puede conducir, si la edad ingresada no es un número válido
//indicarlo en un mensaje.

const Edad = parseInt(prompt("Ingrese una edad: "));

if (Edad >= 18) {
  document.writeln("Ya puedes conducir🚗");
} else {
  document.writeln("numero ingresado no valido");
}
