//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

let numero1 = Number(prompt("Ingrese un numero"));
let numero2 = Number(prompt("Ingrese el numero del cual quiere saber si es multiplo"));

if((numero1%numero2) == 0){
    alert(`${numero1} si es multiplo de ${numero2}`);
} 
else {
    alert(`Los numeros no son multiplos`);
}