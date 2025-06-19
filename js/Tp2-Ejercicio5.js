//Realizar una página con un script que calcule el valor de la letra de un número
// de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R,
// W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let continuar = true;

while (continuar) {
  const entrada = prompt("Ingrese un número de DNI (0 a 99999999):");
  if (entrada === null) {
    break; // El usuario pulsó cancelar en el prompt
  }
  const numero = parseInt(prompt("Ingrese un número de DNI (0 a 99999999):"));

  if (isNaN(numero)) {
    alert("Debe ingresar un número válido.");
  } else if (numero < 0 || numero > 99999999) {
    alert(
      "Por favor ingrese un número mayor o igual a 0 y menor o igual a 99999999."
    );
  } else {
    const residuo = numero % 23;
    const letraAsignada = letras.charAt(residuo);
    alert("La letra asignada a su DNI es: " + letraAsignada);
  }

  continuar = confirm("¿Desea ingresar otro número de DNI?");
}
