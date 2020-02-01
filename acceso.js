//Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte estas cuatro cosas y muestre luego un mensaje indicando si tiene el acceso permitido o no.

const miembro = confirm("Es miembro?");
const cuotaAlDia = confirm("Tiene la cuota al dia");
const noMiembro = confirm("No es miembro?");
const autorizacion = confirm("Tiene autorizacion para ingresar?");

const respuesta = miembro && cuotaAlDia || noMiembro && autorizacion;

alert("Ud puede ingresar al club: " + respuesta);