//Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia.

const opinion1 = Number(prompt("En la escala de 1 al 10, siendo 10 el puntaje mas alto, que opinion tenes de Lady Gaga?"));

let respuesta = opinion1<=5 && "Tu opinion apesta" || opinion1 >5 && opinion1 <= 7 && "Mmmm no es suficiente calificacion" || opinion1>=8 && opinion1<=10 && "Bien ahi!" || isNaN(opinion1) && "Debe ingresar un numero del 1 al 10" || opinion1>10 &&"Entiendo que es excelente Lady Gaga pero el puntaje maximo era 10";

alert(respuesta);

const opinion2= Number(prompt("En la escala de 1 al 10, siendo 10 el puntaje mas alto, que te parecio Avengers End Game?"));

let respuesta2 = opinion2<=5 && "Tu opinion apesta" || opinion2 >5 && opinion2 <= 7 && "Mmmm no es suficiente calificacion" || opinion2>=8 && opinion2<=10 && "Excelente!" || isNaN(opinion2) && "Debe ingresar un numero del 1 al 10" || opinion2>10 &&"Sos super fan pero el puntaje mas alto es 10";

alert(respuesta2);

const opinion3= Number(prompt("En la escala de 1 al 10, siendo 10 el puntaje mas alto, que opinion tenes de las criptomonedas?"));

let respuesta3 = opinion3<=5 && "Tu opinion apesta" || opinion3 >5 && opinion3 <= 7 && "Mmmm no es suficiente calificacion" || opinion3>=8 && opinion3<=10 && "Excelente!" || isNaN(opinion3) && "Debe ingresar un numero del 1 al 10" || opinion3>10 &&"Por mucho que califiques la inversion no va a rendir mas";

alert(respuesta3);

const opinion4= Number(prompt("En la escala de 1 al 10, siendo 10 el puntaje mas alto, que te parecio la actuacion de Joaquin Phoenix como Joker?"));

let respuesta4 = opinion4<=5 && "No comparto" || opinion4 >5 && opinion4 <= 7 && "Mmmm no es suficiente calificacion" || opinion4>=8 && opinion4<=10 && "Merece el Oscar!" || isNaN(opinion4) && "Debe ingresar un numero del 1 al 10" || opinion4>10 &&"Le van a dar el Oscar, no es necesario calificar con mas de 10";

alert(respuesta4);