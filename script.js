const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function mostrarSlide(indice){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[indice].classList.add("active");

}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    mostrarSlide(currentSlide);

});

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    mostrarSlide(currentSlide);

});