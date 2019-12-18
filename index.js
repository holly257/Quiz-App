let currentQuestion = 0;
let score = 0;


//start quiz button
$("#start").on("click", function(e){
    $(".homeScreen").hide();
    $(".question-div").show();
    loadQuestion();
    loadQuestionNumber();
    loadScore();
    loadChoices();
});

//submit answer button
$("#submit-button").on("click", function(e){
    $(".question-div").hide();
    $(".correct-incorrect").show();
    correctOrNot();
    loadScore();
    loadQuestionNumber();
    loadStatement();
})



//next question button
$("#next-button").on("click", function(e){
    $(".correct-incorrect").hide();
    $(".question-div").show();
    increaseQuestionNumber();
    loadQuestionNumber();
    loadQuestion();
    loadScore();
    loadChoices();
})

function loadQuestion() {
    $("#question-line").html(store.questions[currentQuestion].question);
}

function loadChoices(){
    $("#answerOneLabel").html(store.questions[currentQuestion].options[0]);
    $("#answerTwoLabel").html(store.questions[currentQuestion].options[1]);
    $("#answerThreeLabel").html(store.questions[currentQuestion].options[2]);
    $("#answerFourLabel").html(store.questions[currentQuestion].options[3]);
}


let answerSelected = ""
//only works when you click, doesn't work for auto loaded checked box
//might need to find a different way to do this...
//auto filled box also moves?
$("#answer-selections").on("click", "label", function(e){
    answerSelected = $(this).text();
    return answerSelected;
})

function correctOrNot() {
    if (answerSelected === store.questions[currentQuestion].answer) {
        console.log("good job");
        $("#choice-response").html("Correct!"); 
        increaseScore();
    } else {
        $("#choice-response").html("Good Try! Actually...");
    };
}


//question number
function increaseQuestionNumber(){
    currentQuestion++;
    return currentQuestion;
}

function loadQuestionNumber(){
    $(".question-number").html("Current Question: " + currentQuestion + "/" + store.questions.length);
}

//score
function increaseScore(){
    score++;
    return score;
}

function loadScore(){
    $(".scorecard").html("Score: " + score + "/" + store.questions.length);
}

//statement
function loadStatement(){
    $("#correct-statement").html(store.questions[currentQuestion].statement);
}




//-------- background slideshow js
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
