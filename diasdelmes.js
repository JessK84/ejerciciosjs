//Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.
const mes = prompt("Ingrese un mes");

if(mes==="febrero"){
    alert("El mes tiene 28 o 29 dias dependiendo si es año bisiesto");
} else if(mes==="abril"||mes==="junio"||mes==="septiembre"||mes==="noviembre"){
    alert("Su mes tiene 30 dias");
} else {
    alert("Su mes tiene 31 dias");
}