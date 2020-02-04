//Crear un programa que pregunte si va el usuario va a almorzar o cenar, y si es vegetariano o no. Dependiendo de las respuestas, debe recomendar un plato (es decir, debe haber cuatro platos posibles).

const almuerzoOCena = prompt("Va a almorzar o cenar?");
const veggieONo = prompt("Es Ud vegetariano?");

let respuesta = (almuerzoOCena === "almorzar" && veggieONo === "si") && "Le recomiendo la ensalada primavera" || (almuerzoOCena === "almorzar" && veggieONo === "no") && "Le recomiendo asado al horno con papas" || (almuerzoOCena === "cenar" && veggieONo === "si") && "Le recomiendo creps integrales de verdura" || (almuerzoOCena === "cenar" && veggieONo === "no") && "Le recomiendo salmon con salsa de esparragos" || "Solo puede ingresar como respuestas: 'almorzar', 'cenar', 'si' y 'no'";

alert(respuesta);