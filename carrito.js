//Cuando cargue la pagina va a poner a andar el temporizador
window.onload = updateClock;

var totalTime = 240;

function updateClock() {

document.getElementById('countdown').innerHTML = "Tienes " + totalTime + " segundos";

    if(totalTime==0){
      swal('Tiempo para el  Pago', '¡Lo siento, Se te acabó el tiempo!','error')
      .then(() => {
    document.location.reload();  //Va a reiniciar el juego
    }) }else{
        totalTime-=1;         //De lo contrario que ande el reloj y reste uno
        setTimeout("updateClock()",1000);
}
}

// Obtener el DOM

const lineaCompra = document.getElementById('Compra')


// Obtener Total Venta del Carrito usando Local Storage 

let array = localStorage.getItem('myArray');
carritoSuma = JSON.parse(array);


/*Mostrar datos almacenados*/    

function ventaTotal(){
    let sum = 0;
    for (var i = 0; i < carritoSuma.length; i ++){
        sum += carritoSuma[i].precio
    }
    console.log(sum)
    lineaCompra.innerHTML = ("Total a pagar por su compra es de $" + sum )
}

ventaTotal();
