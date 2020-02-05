//Crear un programa que pida ingresar la temperatura del día e indique qué tiempo hace dependiendo de la misma (p. ej.: "Hace frío", "Está templado", etc.). Hacerlo para 3 posibles casos mínimo.

const temperatura = Number(prompt("Ingrese la temperatura del dia en grados"));

let respuesta = temperatura <= 10 && "Hace frio" || temperatura >10 && temperatura <= 20 && "Esta templado" || temperatura > 20 && "Pablo se va a quejar del calor que hace";

alert(respuesta);
