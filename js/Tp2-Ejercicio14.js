//Realiza un script que pida una cadena de texto y lo muestre
//poniendo el signo – entre cada carácter sin usar el método replace.
//Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”
const frase = prompt("Ingrese una frase: ");

let cadena = "";
let i = 0;
while (i < frase.length) {
  const letra = frase.charAt(i);
  cadena += letra + "-";
  i = i + 1;
}
console.log(cadena);
