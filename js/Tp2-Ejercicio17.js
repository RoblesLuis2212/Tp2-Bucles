//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
const texto = prompt("Ingrese un texto: ");

for (let i = 0; i < texto.length; i++) {
  const vocal = texto.charAt(i);
  if (vocal == "a") {
    document.writeln(`la vocal ${vocal} esta en la posicion ${i}`);
    break;
  }
  if (vocal == "e") {
    document.writeln(`la vocal ${vocal} esta en la posicion ${i}`);
    break;
  }
  if (vocal == "i") {
    document.writeln(`la vocal ${vocal} esta en la posicion ${i}`);
    break;
  }
  if (vocal == "o") {
    document.writeln(`la vocal ${vocal} esta en la posicion ${i}`);
    break;
  }
  if (vocal == "u") {
    document.writeln(`la vocal ${vocal} esta en la posicion ${i}`);
    break;
  }
}
