//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.
let duracionTotal = 0;
let vuelo1 = prompt("Ingrese la primer escala de su vuelo");
let duracion = Number(prompt("Ingrese la duracion de la primer escala"));
duracionTotal += duracion;

let vuelo2 = prompt("Ingrese la segunda escala de su vuelo");
duracion = Number(prompt("Ingrese la duracion de la segunda escala"));
duracionTotal += duracion;

let vuelo3 = prompt("Ingrese la tercer escala de su vuelo");
duracion = Number(prompt("Ingrese la duracion de la tercer escala"));

duracionTotal += duracion;

alert(`Las escalas de su vuelo son: 
-${vuelo1}
-${vuelo2}
-${vuelo3}
La duracion total de su vuelo es de ${duracionTotal} horas
`)