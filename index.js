//on start  click
$("#start").on("click", function(e){
    //turn off intro - hide
    $(".homeScreen").hide();
    //display question
    $(".question-div").show();

    loadQuestion();
    loadChoices();
});

function loadQuestion() {
    return store.questions[currentQuestion].question;
}

function assignChoices(){
    let choiceOne = store.questions[currentQuestion].options[0];
    let choiceTw0 = store.questions[currentQuestion].options[1];
    let choiceThree = store.questions[currentQuestion].options[2];
    let choiceFour = store.questions[currentQuestion].options[3];
}

function loadChoices(){
    document.getElementById("answerOneLabel").innerText=choiceOne;
    $(".answerTwoLabel").label.append(choiceTwo);
}


//check answer
//reset quiz to beginning
//increase current question 

let currentQuestion = 0;
let score = 0;

//submit on question will increase the currentQuesiton counter





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
    setTimeout(showSlides, 5000);
}
