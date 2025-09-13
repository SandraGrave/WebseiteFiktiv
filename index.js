//------ IMAGE SLIDER ------//

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function startSlider(){
    if(!intervalId){
         intervalId = setInterval(nextSlide, 5000);
    }
}

function stopSlider(){
    clearInterval(intervalId);
    intervalId=null;
}

function toggleSlider(){
    const btn = document.querySelector(".toggle");
    if(intervalId){
        stopSlider();
        btn.textContent = "Start";
    } else{
        startSlider();
        btn.textContent = "Pause";
    }
}