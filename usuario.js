//Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado

const usuario = "Juan";
const contrasenia = "1425";

const usuarioIngresado = prompt("Ingrese su usuario");
const contraseniaIngresada = prompt("Ingrese su contraseña");

let respuesta = usuario === usuarioIngresado && contrasenia === contraseniaIngresada;

alert("Tiene el acceso autorizado: " + respuesta);