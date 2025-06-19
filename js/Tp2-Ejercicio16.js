//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
//si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
const texto = prompt("Ingrese un texto: ");
let cadena_invertida = "";

for (let i = texto.length - 1; i >= 0; i--) {
  cadena_invertida += texto[i];
}
document.writeln(cadena_invertida);
