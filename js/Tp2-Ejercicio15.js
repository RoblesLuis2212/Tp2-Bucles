//Realiza un script que cuente el número de vocales que tiene un texto.
const texto = prompt("Ingrese un texto: ");
let contador_vocales = 0;

for (let i = 0; i < texto.length; i++) {
  const vocal = texto.charAt(i);
  if (vocal == "a") {
    contador_vocales += 1;
  }
  if (vocal == "e") {
    contador_vocales += 1;
  }
  if (vocal == "i") {
    contador_vocales += 1;
  }
  if (vocal == "o") {
    contador_vocales += 1;
  }
  if (vocal == "u") {
    contador_vocales += 1;
  }
}

document.writeln(`El texto contiene ${contador_vocales} vocales`);
