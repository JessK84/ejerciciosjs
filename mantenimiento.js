//Hacer un programa que pregunte por separado si el auto tiene aceite, agua, y neumáticos con presión. Mostrar en un mensaje si tiene que hacer mantenimiento o no si alguna de las respuestas es negativa

const aceite = confirm("El auto tiene aceite?");
const agua = confirm("El auto tiene agua?");
const neumaticos = confirm("Los neumaticos tienen presion?");

let respuesta = aceite && agua && neumaticos;

alert("Su auto no necesita mantenimiento: " + respuesta);