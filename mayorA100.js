//Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100

const numero1 = Number(prompt("Ingrese el primer numero"));
const numero2 = Number(prompt("Ingrese el segundo numero"));
const numero3 = Number(prompt("Ingrese el tercer numero"));

const esMayorA100 = numero1>100 || numero2>100 || numero3>100;
console.log(esMayorA100);