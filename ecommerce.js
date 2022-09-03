// Un carrito de productos que suma y hace subtotales para pagar es JS


document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const respuesta = await fetch('api.json')
        const productos = await respuesta.json()
        // console.log(productos)
        mostrarProductos(productos)
    } catch (error) {
        console.log(error)
    }
}

// Tomo mis elementos del DOM para poder mostrar en la web

let mostrarTotal = document.getElementById('mostrarTotal')
let mostrarTotal2 = document.getElementById('mostrarTotal2')

// A donde voy a mandar los productos seleccionados por el usuario

let carritoSuma = [];


const productsHTML = document.querySelector(".productos");

function mostrarProductos(productos) {
    productos.forEach((producto) => {
        productsHTML.innerHTML += `
        <section class="Productos">
        <div class="Producto">
        <img src="${producto.imgSrc}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
          <button class="botonDecoracion" onclick="agregarAlCarrito(${producto.precio},${producto.id})">Comprar</button>
    </div>
          `;
    });
  }

// Aqui armo el carrito segun lo que escoja el usuario
class carrito {
    constructor(precio, id) {
        this.precio  = parseInt(precio);
        this.id = parseInt(id)
    }
}

// Que hara js con cada click

function agregarAlCarrito(precio, id){
    carritoSuma.push(new carrito(precio, id));
    ventaTotal()
}

function ventaTotal(){
    let sum = 0;
    for (var i = 0; i < carritoSuma.length; i ++){
        sum += carritoSuma[i].precio
    }
    console.log(sum);
    localStorage.setItem('myArray', JSON.stringify(carritoSuma));
    mostrarTotal.innerHTML = ("Total a pagar por su compra es de $" + sum )
    mostrarTotal2.innerHTML = ("Haga click aqui para continuar con el pago")
}

//filtro por precio

const productsFiltrados = document.querySelector(".productosFiltrados");
const rango = document.getElementById('Rango')

rango.onchange = () => {
    let precio = rango.value
    MostrarRango.innerHTML = rango.value
    console.log(precio)
    productsHTML.innerHTML = ""
    if(precio <=20){
    let newArray = Productos.filter((item) => item.id !== 2 && item.id !== 3 && item.id !== 5 && item.id !== 6);
    console.log(newArray);
    newArray.forEach((producto) => {
        productsFiltrados.innerHTML += `
        <section class="Productos">
        <div class="Producto">
        <img src="${producto.imgSrc}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
          <button class="botonDecoracion" onclick="agregarAlCarrito(${producto.precio},${producto.id})">Comprar</button>
    </div>
          `;
    })
    } else if(precio > 20 && precio < 50){
        let newArray = Productos.filter((item) => item.id !== 1 && item.id !== 2 && item.id !== 4 && item.id !== 5);
        console.log(newArray);
        newArray.forEach((producto) => {
            productsFiltrados.innerHTML += `
            <section class="Productos">
            <div class="Producto">
            <img src="${producto.imgSrc}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $ ${producto.precio}</p>
              <button class="botonDecoracion" onclick="agregarAlCarrito(${producto.precio},${producto.id})">Comprar</button>
        </div>
              `;
        })
    } else if (precio = 50){
        let newArray = Productos.filter((item) => item.id !== 1 && item.id !== 3 && item.id !== 4 && item.id !== 6);
        console.log(newArray);
        newArray.forEach((producto) => {
            productsFiltrados.innerHTML += `
            <section class="Productos">
            <div class="Producto">
            <img src="${producto.imgSrc}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $ ${producto.precio}</p>
              <button class="botonDecoracion" onclick="agregarAlCarrito(${producto.precio},${producto.id})">Comprar</button>
        </div>
              `;
        })
    }
} 

// Mensaje para felicitarlo por su compra

function alertaCompra(){
    swal('¡Gracias por tu compra!', 'Pero registrate primero','success')
    .then(() => {
    window.location.assign('registro.html')
    })
}