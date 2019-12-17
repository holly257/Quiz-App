let currentQuestion = 0;
let score = 0;


$("#start").on("click", function(e){
    $(".homeScreen").hide();
    $(".question-div").show();

    loadQuestion();
    console.log(loadChoices());
});

function loadQuestion() {
    $("#question-line").html(store.questions[currentQuestion].question);
}

function loadChoices(){
    $("#answerOneLabel").html(store.questions[currentQuestion].options[0]);
    $("#answerTwoLabel").html(store.questions[currentQuestion].options[1]);
    $("#answerThreeLabel").html(store.questions[currentQuestion].options[2]);
    $("#answerFourLabel").html(store.questions[currentQuestion].options[3]);
}




$("#submit-button").on("click", function(e){
    $(".question-div").hide();
    $(".correct-incorrect").show();
    correctOrNot();
    //need to update score to new score
    
})

function correctOrNot() {
    //how do I check against the correct value?
    if ($('input[name="radioButtons"]:checked').val() === store.questions[currentQuestion].answer) {
        $("#choice-response").html("Correct!"); 
        //increase score by 1
        increaseScore();
    } else {
        $("#choice-response").html("Good Try! Actually...");
    };
    //either way, set p/ correct-statement = currentQuestion.statement

}

function increaseScore(){
    score++;
    return score;
}
//check answer
//reset quiz to beginning
//increase current question 

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
