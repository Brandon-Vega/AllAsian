/* ==================================================
   CATÁLOGO DE DULCES - ALLASIAN
================================================== */


/* ==================================================
   PRODUCTOS
================================================== */

const productosDulces = [

    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce1.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce2.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce3.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce4.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce5.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce6.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce7.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Dulce xyz",
        precio: "$300.00 MXN",

        imagen: "dulces/dulce8.png",

        busqueda:
            "dulce dulces candy candies gomita gomitas chocolate caramelo caramel azucar",

        descripcion:
            "Dulce xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    }

];



/* ==================================================
   ELEMENTOS DEL HTML
================================================== */

const listaProductos =
    document.getElementById("listaProductos");

const buscadorProductos =
    document.getElementById("buscadorProductos");

const formularioBusqueda =
    document.getElementById("formularioBusqueda");

const contadorResultados =
    document.getElementById("contadorResultados");

const sinResultados =
    document.getElementById("sinResultados");

const botonLimpiarBusqueda =
    document.getElementById("botonLimpiarBusqueda");



/* ==================================================
   NORMALIZAR TEXTO
================================================== */

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

}



/* ==================================================
   CREAR TARJETAS DE PRODUCTOS
================================================== */

function mostrarProductos(productos) {

    listaProductos.innerHTML = "";


    productos.forEach((producto) => {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "product-card producto-buscable";


        tarjeta.dataset.busqueda =
            normalizarTexto(
                `${producto.nombre} ${producto.busqueda}`
            );


        tarjeta.innerHTML = `

            <span class="badge">
                Novedad
            </span>


            <div class="product-image">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

            </div>


            <div class="product-info">

                <h3>
                    ${producto.nombre}
                </h3>


                <p class="price">
                    ${producto.precio}
                </p>


                <div class="botones-producto">

                    <button
                        type="button"
                        class="btn-comprar boton-informacion"

                        data-nombre="${producto.nombre}"
                        data-imagen="${producto.imagen}"
                        data-precio="${producto.precio}"
                        data-descripcion="${producto.descripcion}"
                        data-contenido="${producto.contenido}"
                        data-origen="${producto.origen}"
                    >
                        Ver más sobre este producto
                    </button>


                    <a
                        href="${producto.imagen}"
                        download
                        class="btn-guardar"
                    >

                        <i class="fa-solid fa-download"></i>

                        Guardar imagen

                    </a>

                </div>

            </div>

        `;


        listaProductos.appendChild(tarjeta);

    });

}



/* ==================================================
   BUSCADOR
================================================== */

function buscarProductos() {

    const textoOriginal =
        buscadorProductos.value.trim();


    const textoBuscado =
        normalizarTexto(textoOriginal);


    const productosFiltrados =
        productosDulces.filter((producto) => {

            const informacion =
                normalizarTexto(
                    `
                    ${producto.nombre}
                    ${producto.busqueda}
                    ${producto.descripcion}
                    `
                );


            return informacion.includes(textoBuscado);

        });


    mostrarProductos(productosFiltrados);



    /* CONTADOR */

    if (textoBuscado === "") {

        contadorResultados.textContent =
            `Mostrando todos los dulces (${productosDulces.length})`;

    }

    else if (productosFiltrados.length === 1) {

        contadorResultados.textContent =
            `Se encontró 1 dulce para "${textoOriginal}"`;

    }

    else {

        contadorResultados.textContent =
            `Se encontraron ${productosFiltrados.length} dulces para "${textoOriginal}"`;

    }



    /* SIN RESULTADOS */

    if (productosFiltrados.length === 0) {

        sinResultados.classList.add("mostrar");

    }

    else {

        sinResultados.classList.remove("mostrar");

    }

}



/* ==================================================
   BUSCAR MIENTRAS ESCRIBES
================================================== */

buscadorProductos.addEventListener(
    "input",
    buscarProductos
);



/* ==================================================
   BOTÓN BUSCAR
================================================== */

formularioBusqueda.addEventListener(
    "submit",
    (evento) => {

        evento.preventDefault();

        buscarProductos();

    }
);



/* ==================================================
   LIMPIAR BÚSQUEDA
================================================== */

botonLimpiarBusqueda.addEventListener(
    "click",
    () => {

        buscadorProductos.value = "";

        mostrarProductos(productosDulces);

        contadorResultados.textContent =
            `Mostrando todos los dulces (${productosDulces.length})`;

        sinResultados.classList.remove("mostrar");

        buscadorProductos.focus();

    }
);



/* ==================================================
   MOSTRAR TODO AL ENTRAR
================================================== */

mostrarProductos(productosDulces);

contadorResultados.textContent =
    `Mostrando todos los dulces (${productosDulces.length})`;