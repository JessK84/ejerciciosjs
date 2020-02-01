//Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, si ha tenido o tiene hepatitis, si tiene anemia. Si responde a alguna de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre

const tieneTatuajes = confirm("Tiene tatuajes?");
const hepatitis = confirm("Ha tenido o tiene hepatitis?");
const anemia = confirm("Tiene anemia?");

const respuesta = tieneTatuajes || hepatitis || anemia;


alert("No puede donar sangre: " + respuesta);

// if(respuesta === true){
//     alert("No puede donar sangre");
// } else {
//     alert("Puede donar sangre");
// }

