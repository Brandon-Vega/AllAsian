/* ==================================================
   CATÁLOGO DE RAMEN - ALLASIAN
================================================== */


/* ==================================================
   PRODUCTOS
================================================== */

const productosRamen = [

    {
        nombre: "Ramen Arih Gochujang Butter 4 Pack",
        precio: "$320.00 MXN",

        imagen: "/ramen/arihbutter.png",

        busqueda:
            "ramen ramens noodle noodles fideos mantequilla butter spicy picante arih bts corea korea",

        descripcion:
            "Ramen Arih con contenido de 4 bolsas de 135g cada una.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen Buldak Birria 5 Pack",
        precio: "$280.00 MXN",

        imagen: "/ramen/buldakbirria.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante birria buldak",

        descripcion:
            "Ramen Buldak Birria con contenido de 5 bolsas de 130g cada una.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen Tapatio Pack Birria 4 Pack",
        precio: "$200.00 MXN",

        imagen: "/ramen/tapatiopackbirria.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante tapatio birria",

        descripcion:
            "Ramen Tapatio con contenido de 4 bolsas de 120g cada una.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen Mep Black Pepper & Beef 4 Pack",
        precio: "$250.00 MXN",

        imagen: "/ramen/mepramenpepper.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante beef res black pepper pimienta negra EnHypen Corea Korea",

        descripcion:
            "Ramen Mep Black Pepper & Beef con contenido de 4 bolsas de 120g cada una.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Cheetos Mac And Cheese Flaming Hot Cajita",
        precio: "$60.00 MXN",

        imagen: "/ramen/cheetosmacandcheese.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa queso cheese spicy picante cheetos mac and cheese",

        descripcion:
            "Cheetos Mac And Cheese Flaming Hot Cajita de 170g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen Arih Truffle Bulgogi 4 Pack",
        precio: "$300.00 MXN",

        imagen: "/ramen/arihtrufflebulgogi.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante truffle bulgogi arih corea korea",

        descripcion:
            "Ramen Arih Truffle Bulgogi con contenido de 4 bolsas de 130g cada una.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Top Ramen Bowl Beef With Japanese Barbecue Sauce",
        precio: "$80.00 MXN",

        imagen: "/ramen/topramengarlic.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante top beef japanese barbecue sauce",

        descripcion:
            "Ramen bowl con sabor a res con salsa de barbacoa japonesa 115g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Ramen Sriracha Chicken Bowl",
        precio: "$80.00 MXN",

        imagen: "/ramen/srirachachickenbowl.png",

        busqueda:
            "ramen ramens noodle noodles fideos sopa spicy picante sriracha chicken bowl",

        descripcion:
            "Ramen Sriracha Chicken Bowl de 110g.",

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
