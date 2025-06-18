//Realiza un script que pida por teclado 3 nombres y 3 edades
//e indique el nombre del mayor
const Name1 = prompt("Ingrese el primer nombre: ");
const Age1 = parseInt(prompt("Ingrese la primera edad: "));

const Name2 = prompt("Ingrese el segundo nombre: ");
const Age2 = parseInt(prompt("Ingrese la segunda edad: "));

const Name3 = prompt("Ingrese el tercer nombre: ");
const Age3 = parseInt(prompt("Ingrese la tercera edad: "));

const Mayor = Math.max(Age1, Age2, Age3);

if (Mayor == Age1) {
  alert(`${Name1} es el mayor`);
}
if (Mayor == Age2) {
  alert(`${Name2} es el mayor`);
}
if (Mayor == Age3) {
  alert(`${Name3} es el mayor`);
}
