/* ==================================================
   CATÁLOGO DE GALLETAS - ALLASIAN
================================================== */


/* ==================================================
   PRODUCTOS
================================================== */

const productosGalletas = [

    {
        nombre: "Oreo Family Size Thins Tiramisu",
        precio: "$200.00 MXN",

        imagen: "/galletas/oreotiramisu.png",

        busqueda:
            "galleta galletas cookie cookies café coffee chocolate tiramisu oreo",

        descripcion:
            "Galleta xyz.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Caja Ritz Bits Pizza",
        precio: "$150.00 MXN",

        imagen: "/galletas/ritzpizza.png",

        busqueda:
            "galleta galletas cracker pizza ritz snack",

        descripcion:
            "Ritz Bits Pizza Caja Conteido de 249g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Caja Teddy Grahams Strawberry",
        precio: "$160.00 MXN",

        imagen: "/galletas/teddygrahamsstrawberry.png",

        busqueda:
            "galleta galletas cookie cookies grahams graham teddy strawberry fresa",

        descripcion:
            "Caja Teddy Grahams Strawberry Caja Conteido de 283g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Chips Ahoy Red Velvet",
        precio: "$150.00 MXN",

        imagen: "/galletas/cahoyvelvet150.png",

        busqueda:
            "galleta galletas cookie cookies chip red velvet chips ahoy",

        descripcion:
            "Bolsa de galletaws chips ahoy red velvet contenido de 272g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Cheez It ft Coors Light",
        precio: "$160.00 MXN",

        imagen: "/galletas/cheezitcoorslight.png",

        busqueda:
            "galleta galletas saladas salt cheez it coors light beer cerveza",

        descripcion:
            "Caja de galletas saladas de queso con sabor a cerveza Coors Light contenido de 351g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Caja Galletas Pillsbury Funfetti 28 Pack",
        precio: "$500.00 MXN",

        imagen: "/galletas/pillsbury28pkfunfetti.png",

        busqueda:
            "galleta galletas cookie cookies chip funfetti chispas colores pillsbury",

        descripcion:
            "Caja de galletas Pillsbury Funfetti contenido de 28 bolsitas de galletas.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Caja Galletas Scooby Doo",
        precio: "$300.00 MXN",

        imagen: "/galletas/scoobydoocookies.png",

        busqueda:
            "galleta galletas cookie cookies grahams canela scooby doo",

        descripcion:
            "Caja de galletas Scooby Doo sabor canela contenido de 311g.",

        contenido:
            "Contenido: consultar empaque.",

        origen:
            "Producto importado."
    },


    {
        nombre: "Bolsa Galletas Mothers ft Nerds",
        precio: "$160.00 MXN",

        imagen: "/galletas/mothersnerds.png",

        busqueda:
            "galleta galletas cookie cookies dulce candy nerds mothers",

        descripcion:
            "Bolsa de galletas mothers con chispas de nerds contenido de 255g.",

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
        productosGalletas.filter((producto) => {

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
            `Mostrando todas las galletas (${productosGalletas.length})`;

    }

    else if (productosFiltrados.length === 1) {

        contadorResultados.textContent =
            `Se encontró 1 galleta para "${textoOriginal}"`;

    }

    else {

        contadorResultados.textContent =
            `Se encontraron ${productosFiltrados.length} galletas para "${textoOriginal}"`;

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

        mostrarProductos(productosGalletas);

        contadorResultados.textContent =
            `Mostrando todas las galletas (${productosGalletas.length})`;

        sinResultados.classList.remove("mostrar");

        buscadorProductos.focus();

    }
);



/* ==================================================
   MOSTRAR TODO AL ENTRAR
================================================== */

mostrarProductos(productosGalletas);

contadorResultados.textContent =
    `Mostrando todas las galletas (${productosGalletas.length})`;
