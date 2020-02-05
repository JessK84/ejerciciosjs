//Crear un programa que pida ingresar la edad y muestre un mensaje de bienvenida al sitio si la edad es mayor o igual a 18, o de que no puede ingresar si es menor.

const edad = Number(prompt("Ingrese su edad"));

let respuesta = edad>=18 && "Bienvenido" || "No puede ingresar al sitio por ser menor"

alert(respuesta);