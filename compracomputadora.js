//Crear un programa que muestre el mensaje: "Está por comprar la Notebook HP 3000 a $40000". Luego debe preguntar, por separado, si desea agregarle más memoria, más espacio en disco, y una placa de vídeo mejor. Por cada respuesta afirmativa, debe agregarle $10000 al precio base. Mostrar al final un mensaje con un detalle de la compra, las mejoras elegidas y el precio final.


let computadora = confirm("Está por comprar la Notebook HP 3000 a $40000, desea agregarle mas memoria?");


let precioFinal = computadora === true && 40000 + 10000 || computadora === false && 40000;
let mensaje = computadora === true && "mas memoria" || computadora === false && ""; 


computadora = confirm(`El monto de su compra hasta el momento es de $${precioFinal}, desea agregarle mas espacio en dispo por $ 10000?`);

preciofinal = computadora === true && (precioFinal+= 10000) ||computadora === false && precioFinal;
mensaje = computadora === true && mensaje + ", mas espacio en disco" || computadora === false && "";

computadora = confirm(`El monto de su compra hasta el momento es de $${precioFinal}, desea agregarle una placa de video mejor por $ 10000`);

precioFinal = computadora === true && (precioFinal+=10000) || computadora === false && precioFinal;
mensaje = computadora === true && mensaje + " y placa de video" || computadora === false && ""; 


alert(`Ud esta comprando la Notebook HP 3000 a $40000 ${mensaje} y el precio final es de $${precioFinal}`);



