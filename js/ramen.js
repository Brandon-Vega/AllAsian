/* ==================================================
   CATÁLOGO DE RAMEN - ALLASIAN
================================================== */


/* ==================================================
   PRODUCTOS
================================================== */

const productosRamen = [

    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen1.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen2.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen3.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen4.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen5.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen6.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen7.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen xyz",
        precio: "$300.00 MXN",

        imagen: "ramen/ramen8.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante",

        descripcion:
            "Ramen xyz.",

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
        productosRamen.filter((producto) => {

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
            `Mostrando todos los ramen (${productosRamen.length})`;

    }

    else if (productosFiltrados.length === 1) {

        contadorResultados.textContent =
            `Se encontró 1 ramen para "${textoOriginal}"`;

    }

    else {

        contadorResultados.textContent =
            `Se encontraron ${productosFiltrados.length} ramen para "${textoOriginal}"`;

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

        mostrarProductos(productosRamen);

        contadorResultados.textContent =
            `Mostrando todos los ramen (${productosRamen.length})`;

        sinResultados.classList.remove("mostrar");

        buscadorProductos.focus();

    }
);



/* ==================================================
   MOSTRAR TODO AL ENTRAR
================================================== */

mostrarProductos(productosRamen);

contadorResultados.textContent =
    `Mostrando todos los ramen (${productosRamen.length})`;