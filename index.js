



//slideshow js
function currentSlide(n) {
    showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}



//https://www.w3schools.com/howto/howto_js_slideshow.asp
//https://www.htmlgoodies.com/beyond/javascript/stips/create-a-simple-automated-slideshow.html 