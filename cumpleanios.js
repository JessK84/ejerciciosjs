//Crear un programa que pida adivinar tu cumpleaños ingresando por separado ingresar día, mes y año, en números, y mostrar luego si un mensaje si ha adivinado o no.

let dia = Number(prompt("Ingrese, en numeros, que dia cree que es mi cumpleaños"));
let mes = Number(prompt("Ingrese, en numeros, que mes cree que cumplo años"));
let anio = Number(prompt("Ingrese, en numeros, en que año cree que naci"));

let respuesta = (dia === 15 && mes === 7 && anio === 1980) && "Felicitaciones, ha adivinado mi fecha de nacimiento" || "Perdio :S";

alert(respuesta);