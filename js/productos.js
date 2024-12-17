const crearHTML = (item) => {
        const html = `
            <article data-id="${item.id}">
            <div class="card">
                <img src="${item.imagen}" alt="${item.descripcion}">
                <h3>art: ${item.id}   ${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <p>$ ${item.precio}</p>
                <button type="button" class="agregar">Agregar</button>
            </div>
            </article>
    `
  return html;
  };
 
  const mostrarProductos = async () => {
    try {
      const response = await  fetch('productos.json');
      console.log(response);
      const array = await response.json();
  
      console.log(array);
    
      // busca en dom elemento con la clase listado-productos
      const listadoProductos = document.querySelector(".listado-productos"); 

      listadoProductos.innerHTML = "";

      array.forEach((item) => {

        const elementos = crearHTML(item);
        //   console.log(elementos);
        listadoProductos.innerHTML += elementos;
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  // console.log(carrito);
  mostrarProductos();

  / Escucho todos los eventos click el documento
  document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'agregar'
  if (event.target.classList.contains("agregar")) {
    // Busco el contenedor mas cercano que se un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    const index = carrito.findIndex((item) => item.id == id);

    if (index == -1) {
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      const elemento = productos.find((producto) => producto.id == id);
      console.log(elemento);

      // Uso destructuring para creo las constante con los valores del Objeto
      const { nombre, precio } = elemento;

      // Creo el objeto producto para insertar en el carrito
      const agregarproducto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      };

      // let { cantidad } = producto;
      // console.log(cantidad);

      carrito.push(agregarproducto);
    } else {
      const agregarproducto = carrito[index];
      producto.cantidad++;
    }

    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});

  