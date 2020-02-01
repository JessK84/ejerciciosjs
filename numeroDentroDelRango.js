//Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el límite mayor, y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.

const rangoInferior = Number(prompt("Ingrese el rango inferior"));
const rangoSuperior = Number(prompt("Ingrese el rango superior"));
const numero = Number(prompt("Ingrese un numero aleatorio"));

const respuesta = numero >= rangoInferior && numero<= rangoSuperior;

console.log(respuesta);
