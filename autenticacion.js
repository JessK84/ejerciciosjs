//Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables. Si coinciden debe mostrar un mensaje que diga "Autenticación exitoso" y si no, debe mostrar "Usuario o contraseña equivocados".

const usuario = "Pablo";
const contrasenia = 1526;

let loginUsuario = prompt("Ingrese su usuario");
let loginContrasenia = Number(prompt("Ingrese su contraseña"));

let respuesta = usuario === loginUsuario && contrasenia === loginContrasenia && "Autenticacion exitosa" || "Usuario o contraseña equivocados";

alert(respuesta);