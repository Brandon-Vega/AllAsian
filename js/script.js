/* ==================================================
   JAVASCRIPT GENERAL - ALLASIAN
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       MENÚ DESPLEGABLE DE CATEGORÍAS
    ================================================== */

    const botonCategorias =
        document.getElementById("botonCategorias");

    const listaCategorias =
        document.getElementById("listaCategorias");

    const flechaMenu =
        document.querySelector(".flecha-menu");


    if (botonCategorias && listaCategorias) {

        botonCategorias.addEventListener("click", () => {

            /* ABRIR / CERRAR */

            const estaAbierto =
                listaCategorias.classList.toggle("menu-abierto");


            /* GIRAR FLECHA */

            if (flechaMenu) {

                flechaMenu.classList.toggle(
                    "flecha-abierta",
                    estaAbierto
                );

            }


            /* ACCESIBILIDAD */

            botonCategorias.setAttribute(
                "aria-expanded",
                estaAbierto ? "true" : "false"
            );

        });

    }

});