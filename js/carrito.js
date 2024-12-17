
function cargarCarrito() { 
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    var carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    for (var i = 0; i < carrito.length; i++){ 
        var producto = carrito[i];
        var li = document.createElement('li');
        //li.textContent = producto.nombre + ' - $' + producto.precio;
        li.textContent = producto.cantidad + '  -  '+producto.nombre + ' - $' + producto.precio + ' - $'+producto.precio*producto.cantidad;
        listaCarrito.appendChild(li);
        subtotal=subtotal+(producto.precio * producto.cantidad)
    } 

}




let subtotal=0
cargarCarrito()
console.log(subtotal)
const subtotalElement = document.getElementById('subtotal');
console.log(subtotalElement)
subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;

