//Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar
//la calificación en un alert según los siguientes rangos de nota:
//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente

const Nota = parseFloat(prompt("Ingrese una nota del 0 al 10: "));

if (isNaN(Nota)) {
  alert("Introduce un numero valido");
}
if (Nota > 10 || Nota < 0) {
  alert("Numero Erroneo");
}
if (Nota >= 0 && Nota <= 2) {
  document.writeln("Muy deficiente");
}
if (Nota === 3 || Nota === 4) {
  document.writeln("Insuficiente");
}
if (Nota === 5 || Nota === 6) {
  document.writeln("Suficiente");
}
if (Nota === 7) {
  document.writeln("Bien");
}
if (Nota === 8 || Nota === 9) {
  document.writeln("Notable");
}
if (Nota === 10) {
  document.writeln("Sobresaliente");
}
