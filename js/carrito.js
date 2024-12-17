function cargarCarrito() { 
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    var carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    for (var i = 0; i < carrito.length; i++){ 
        var producto = carrito[i];
        var li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);
    } 
}






document.getElementById("boton-agregar").addEventListener("click",
    function () {
    let producto = { id: 1, nombre: "Producto 1", precio: 10 };
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    });
    