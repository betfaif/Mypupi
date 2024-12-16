document.getElementById("boton-agregar").addEventListener("click",
    function () {
    let producto = { id: 1, nombre: "Producto 1", precio: 10 };
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    });
    