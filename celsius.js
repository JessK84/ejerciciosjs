//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

let celsius = Number(prompt("Ingrese la cantidad de grados Celsius a convertir a Fahrenheit"));

let conversor = (celsius * 9/5) + 32;

alert("El equivalente en grados Fahrenheit es: " + conversor)