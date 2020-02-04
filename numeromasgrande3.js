//Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

const numero1 = Number(prompt("Ingrese un numero"));
if (isNaN(numero1) || numero1 == null || numero1 == "") {
	alert("No se ha ingresado un numero valido");
} else {
	const numero2 = Number(prompt("Ingrese otro numero"));
	if (isNaN(numero2) || numero2 == null || numero2 == "") {
		alert("No se ha ingresado un numero valido");

	} else {
        const numero3 = Number(prompt("Ingrese otro numero"));
	    if (isNaN(numero3) || numero3 == null || numero3 == "") {
        alert("No se ha ingresado un numero valido");
        } else{
        let mensaje = numero1>numero2 && numero1>numero3 && alert(`El numero mayor es ${numero1}`) || numero1<numero2 && numero2>numero3 && alert(`El numero mayor es ${numero2}`) || numero3>numero1 && numero3>numero2 && alert(`El numero mayor es ${numero3}`) || (numero1===numero2 || numero1===numero3 || numero2===numero3) && alert("Hay dos numeros iguales");
	}
}
}