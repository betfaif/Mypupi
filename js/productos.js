const crearHTML = (item) => {
    /* const html = `
              <article data-id="${item.id}">
                  <h3>${item.title}</h3>
                  <img src="${item.image}" width="200" alt="${item.title}">
                  <p>${item.description}</p>
                  <p>$ ${item.price}</p>
                  <button type="button">Agregar</button>
              </article>
          `;
 */

    const html = `
            <article data-id="${item.id}">
            <div class="card">
                <img src="${item.imagen}" alt="${item.descripcion}">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <p>$ ${item.precio}</p>
                <button type="button">Agregar</button>
            </div>
            </article>
    `
    return html;
  };
  // <button type="button" class="agregar">Agregar</button>
  // fetch("https://fakestoreapi.com/products")
  //   .then((response) => response.json())
  //   .then((array) => {
  //     console.log(array);
  //     const listaProductos = document.querySelector("#lista-productos");
  //     listaProductos.innerHTML = "";
  
  //     array.forEach((item) => {
  //       const elementos = crearHTML(item);
  //       //   console.log(elementos);
  //       listaProductos.innerHTML += elementos;
  //     });
  //   })
  //   .catch((error) => console.error(error));
  
  const mostrarProductos = async () => {
    try {
      const response = await  fetch('productos.json');
      console.log(response);
      const array = await response.json();
  
      console.log(array);
      //const listaProductos = document.querySelector("#lista-productos");
      // busca en dom elemento con la clase listado-productos
      const listadoProductos = document.querySelector(".listado-productos"); 

      listaProductos.innerHTML = "";
      array.forEach((item) => {
        const elementos = crearHTML(item);
        //   console.log(elementos);
        listaProductos.innerHTML += elementos;
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  mostrarProductos();
