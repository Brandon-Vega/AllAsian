document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       SLIDER
    ========================== */

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;

    function mostrarSlide(indice) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        if (slides[indice]) {
            slides[indice].classList.add("active");
        }
    }

    /*
       El slider solamente funcionará si los botones
       y las imágenes existen en la página actual.
    */

    if (slides.length > 0 && nextBtn && prevBtn) {

        nextBtn.addEventListener("click", function () {

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            mostrarSlide(currentSlide);
        });

        prevBtn.addEventListener("click", function () {

            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            mostrarSlide(currentSlide);
        });
    }


    /* ==========================
       MENÚ DE CATEGORÍAS
    ========================== */

    const botonCategorias =
        document.getElementById("botonCategorias");

    const listaCategorias =
        document.getElementById("listaCategorias");

    if (botonCategorias && listaCategorias) {

        botonCategorias.addEventListener("click", function (evento) {

            evento.stopPropagation();

            const estaAbierto =
                listaCategorias.classList.toggle("mostrar");

            botonCategorias.classList.toggle(
                "activo",
                estaAbierto
            );

            botonCategorias.setAttribute(
                "aria-expanded",
                estaAbierto
            );
        });

        listaCategorias.addEventListener("click", function (evento) {
            evento.stopPropagation();
        });

        document.addEventListener("click", function () {

            listaCategorias.classList.remove("mostrar");
            botonCategorias.classList.remove("activo");

            botonCategorias.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    }

});