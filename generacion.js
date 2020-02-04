//Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const anioNacimiento = Number(prompt("Ingrese el año de su nacimiento"));

if(anioNacimiento<=1948 && anioNacimiento>1930){
    alert("Ud corresponde a la Silent Generation");
} else if(anioNacimiento<=1968){
    alert("Ud corresponde a la Baby Boom Generation"); 
} else if(anioNacimiento<=1980){
    alert("Ud corresponde a la X Generation");
} else if(anioNacimiento<=1993){
    alert("Ud corresponde a la Millennials Generation");
} else {
    alert("Ud corresponde a la Z Generation");
}