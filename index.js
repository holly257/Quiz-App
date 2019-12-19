let currentQuestion = 0;
let score = 0;

//buttons
$("#start").on("click", function(e){
    $(".homeScreen").hide();
    $(".question-div").show();
    loadQuestionPage();
});

$("#submit-form").on("submit", function(e){
    e.preventDefault();
    $(".question-div").hide();
    $(".correct-incorrect").show();
    correctOrNot();
    loadQuestionNumber();
    loadScore();
    loadStatement();
})

$("#next-button").on("click", function(e){
    $(".correct-incorrect").hide();
    $(".question-div").show();
    if(!isLastQuestion()){
        increaseQuestionNumber();
        loadQuestionPage();
    };
})

$("#restart-button").on("click", function(e){
    $(".homeScreen").show();
    $(".results").hide();
    questionReset();
    scoreReset();
})

//question
function increaseQuestionNumber(){
    currentQuestion++;
    return currentQuestion;
}

function getQuestion() {
    $("#question-line").html(store.questions[currentQuestion].question);
    $('input[name="radioButtons"]').prop("checked", false);
}

function isLastQuestion(){
    if (currentQuestion === store.questions.length-1){
        renderResults();
        return true;
    } else {
        return false;
    }
}

function loadQuestionNumber(){
    $(".question-number").html("Current Question: " + (currentQuestion+1) + "/" + store.questions.length);
}

function questionReset(){
    currentQuestion = 0;
    return currentQuestion;
}

//score
function increaseScore(){
    score++;
    return score;
}

function loadScore(){
    $(".scorecard").html("Score: " + score + "/" + store.questions.length);
}

function finalScore(){
    $("#final-score").html("Your final score is " + score + " of " + store.questions.length + " correct!");
}

function scoreReset(){
    score = 0;
    return score;
}

//statement
function loadStatement(){
    $("#correct-statement").html(store.questions[currentQuestion].statement);
}

//general
function loadChoices(){
    let choiceOne = store.questions[currentQuestion].options[0];
    let choiceTwo = store.questions[currentQuestion].options[1];
    let choiceThree = store.questions[currentQuestion].options[2];
    let choiceFour = store.questions[currentQuestion].options[3];
    $("#answerOneLabel").html(choiceOne);
    $("#answerTwoLabel").html(choiceTwo);
    $("#answerThreeLabel").html(choiceThree);
    $("#answerFourLabel").html(choiceFour);
    $("#answerOne").val(choiceOne);
    $("#answerTwo").val(choiceTwo);
    $("#answerThree").val(choiceThree);
    $("#answerFour").val(choiceFour);
}

function loadQuestionPage(){
    loadQuestionNumber();
    loadScore();
    getQuestion();
    loadChoices();
}

function correctOrNot() {
    let answerSelected = $('input[name="radioButtons"]:checked').val(); 
    if (!answerSelected){
        $("#choice-response").html("Please select an answer next time...");
    } else if (answerSelected === store.questions[currentQuestion].answer) {
        $("#choice-response").html("Correct!"); 
        increaseScore();
    } else {
        $("#choice-response").html("Good Try! Actually...");
    };
}

function renderResults(){
    $(".correct-incorrect").hide();
    $(".question-div").hide();
    $(".results").show();
    finalScore();
}

//background slideshow
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