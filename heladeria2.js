//Heladería II

// Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:

// 1/4kg: 2 sabores.

// 1/2kg: 3 sabores.

// 3/4kg: 4 sabores.

// 1kg: 5 sabores.

// Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al finalizar un mensaje con la cantidad de kg y los gustos escogidos.

const kilo = prompt("Cuantos kgs desea llevar");

if(kilo === "un cuarto"){
    let sabor1 = prompt("Ud puede elegir dos sabores, ingrese el primero");
    let sabor2 = prompt("Elija el segundo sabor");
    alert(`Ud ha comprado ${kilo} kg de helado, con los sabores ${sabor1} y ${sabor2}`);
} else if(kilo === "medio kilo"){
    let sabor1 = prompt("Ud puede elegir tres sabores, ingrese el primero");
    let sabor2 = prompt("Elija el segundo sabor");
    let sabor3 = prompt("Elija el tercer sabor");
    alert(`Ud ha comprado ${kilo} kg de helado, con los sabores ${sabor1},  ${sabor2} y ${sabor3}`);

} else if(kilo === "tres cuartos"){
    let sabor1 = prompt("Ud puede elegir cuatro sabores, ingrese el primero");
    let sabor2 = prompt("Elija el segundo sabor");
    let sabor3 = prompt("Elija el tercer sabor");
    let sabor4 = prompt("Elija el cuarto sabor");
    
    alert(`Ud ha comprado ${kilo} kg de helado, con los sabores ${sabor1},  ${sabor2}, ${sabor3} y ${sabor4}`);
}