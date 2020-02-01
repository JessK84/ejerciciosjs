//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).



let numeroInicial = Number(prompt("Ingrese un numero de partida"));
const incrementando = Number(prompt("Indique en cuanto desea que se incremente el numero inicial"));

let incremento = numeroInicial + incrementando;

alert(`Numero Inicial: ${numeroInicial} 
Incrementando de a: ${incrementando}
- Incremento 1) Total: ${incremento}`);

incremento +=incrementando;
alert(`Incremento 2) Total: ${incremento}`);

incremento +=incrementando;
alert(`Incremento 3) Total: ${incremento}`);

incremento +=incrementando;
alert(`Incremento 4) Total: ${incremento}`);

incremento +=incrementando;
alert(`Incremento 5) Total: ${incremento}`);


