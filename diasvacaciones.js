//Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva la cantidad de días de vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años corresponden 21 días).

let aniosTrabajados = Number(prompt("Ingrese cuantos años lleva trabajando en la empresa"));

let vacaciones = 15;
let incremento = 0;

if(aniosTrabajados<= 3){
    alert(`Le corresponden ${vacaciones} dias de vacaciones`);
} else {
    incremento = (aniosTrabajados-3)*2;
    vacaciones += incremento;
    alert(`Le corresponden ${vacaciones} dias de vacaciones`);
}
