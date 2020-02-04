//Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de felicitaciones si se respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.

const pregunta1 = prompt("2x2 es igual 4?");
const pregunta2 = prompt("El simbolo quimico de agua es F2O?");
const pregunta3 = prompt("Se esta haciendo eterna la guia de ejercicios de js?");

let respuesta = (pregunta1 === "si" && pregunta2 === "no" && pregunta3 === "si") && "Felicitaciones, ha respondido bien todas las preguntas" ||  "Perdio :(";

alert(respuesta);