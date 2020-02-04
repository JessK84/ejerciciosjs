//Crear un programa que muestre el dinero inicial, y que permita retirar dinero hasta 3 veces preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando

let saldoInicial = 5000;
alert(`Su saldo inicial es: ${saldoInicial}`);

let retiro = Number(prompt("Ingrese el saldo a retirar"));

if(retiro>saldoInicial){
  alert("Ud no posee saldo suficiente");
}else{
    saldoInicial-=retiro;
    alert(`Ud ha retirado $ ${retiro}, su saldo ahora es de $ ${saldoInicial}`);
}

retiro = Number(prompt("Ingrese el saldo a retirar"));

if(retiro>saldoInicial){
    alert("Ud no posee saldo suficiente");
  }else{
      saldoInicial-=retiro;
      alert(`Ud ha retirado $ ${retiro}, su saldo ahora es de $ ${saldoInicial}`);
  }
  
retiro = Number(prompt("Ingrese el saldo a retirar"));

  if(retiro>saldoInicial){
      alert("Ud no posee saldo suficiente");
    }else{
        saldoInicial-=retiro;
        alert(`Ud ha retirado $ ${retiro}, su saldo ahora es de $ ${saldoInicial}`);
    }