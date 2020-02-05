//Crear un programa que muestre la temperatura actual de la habitación y pregunte si tiene desea subir la temperatura. Si responde que sí, que pregunte en cuánto desea subirla, y mostrar luego la temperatura actualizada. Si responde que no, que pregunte si desea bajar la temperatura. Si responde que sí desea hacerlo, que pregunte en cuánto desea bajarla, y mostrar luego la temperatura actualizada.

let temperatura = 15;

const variacion = prompt(`La temperatura actual de la habitacion es ${temperatura}, desea subir la temperatura?`);

if(variacion === "si"){
    const aumento = Number(prompt("En cuantos grados desea subir la temperatura?"));
    temperatura+=aumento;
    alert(`La temperatura de la habitacion subio en ${aumento} grados, ahora es de ${temperatura} grados`);
} else {
    const consulta = prompt("Desea bajar la temperatura?");
    if(consulta === "si"){
        const descenso = Number(prompt("En cuantos grados desea bajar la temperatura?"));
        temperatura-=descenso;
        alert(`La temperatura de la habitacion bajo en ${descenso} grados, ahora es de ${temperatura} grados`);
    } else {
        alert(`La temperatura se mantendra en ${temperatura} grados`);
    }
    
    
}