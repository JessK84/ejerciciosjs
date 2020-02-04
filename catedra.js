//Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.

const nota1 = Number(prompt("Ingrese la nota del primer examen"));
const nota2 = Number(prompt("Ingrese la nota del segundo examen"));
const nota3 = Number(prompt("Ingrese la nota del tercer examen"));

let resultado = nota1 >= 8 && nota2 >=8 && "Ha promocionado la catedra" || nota1 < 8 && nota2 >=8 && nota3 >= 8 && "Ha promocionado la catedra" || nota1 >= 8 && nota2 < 8 && nota3 >=8 && "Ha promocionado la catedra" || "No ha promocionado la catedra";

alert(resultado);
