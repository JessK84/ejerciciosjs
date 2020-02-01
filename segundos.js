//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

let cantidadSegundos = Number(prompt("Ingrese la cantidad de segundos que desea convertir"));

let hora = parseInt(cantidadSegundos/3600);
let minutos = parseInt((cantidadSegundos - hora*3600)/60);
let segundos = cantidadSegundos - (hora*3600+minutos*60);

alert(`Los segundos ingresados equivalen a:
-${hora} hora/s
-${minutos} minuto/s
-${segundos} segundo/s
`)



