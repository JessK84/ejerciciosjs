//Crear un programa que pida el monto a pagar, y si quiere pagarlo pagarlo con tarjeta o no. Si responde que no, debe mostrar un mensaje que diga "Gracias por su compra". Si responde que sí, debe preguntar en cuántas cuotas desea pagarlo: 3, 6, o 12. Luego, debe mostrar la cantidad de cuotas a pagar elegidas con su valor teniendo en cuenta el interés. El interés debe ser del 5% para 3 cuotas, 10% para 6 y 15% para 12, sobre el total. Guardar los porcentajes de intereses en variables.

const importeAPagar = Number(prompt("Ingrese el monto a pagar"));
let pago = prompt("Desea abonarlo con tarjeta?");

if (pago === "si"){
    let cantidadCuotas = Number(prompt("Seleccione la cantidad de cuotas que desea \n 3 \n 6 \n 9"));
    if(cantidadCuotas === 3){
        let interes = importeAPagar*0.05;
        alert(`Los intereses ascienden a $ ${interes}`);
    } else if(cantidadCuotas === 6){
        interes = importeAPagar*0.1;
        alert(`Los intereses ascienden a $ ${interes}`);
    }else{
        interes = importeAPagar*0.15;
        alert(`Los intereses ascienden a $ ${interes}`);
    }
} else{
    alert("Gracias por su compra");
}