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

//restart button
$("#restart-button").on("click", function(e){
    $(".homeScreen").show();
    $(".results").hide();
    questionReset();
    scoreReset();
})

//set variable for each choice
//then set that variable equal to the html in the label 
//then set the variable equal to the val for that radio button
function loadChoices(){
    $("#answerOneLabel").html(store.questions[currentQuestion].options[0]);
    $("#answerTwoLabel").html(store.questions[currentQuestion].options[1]);
    $("#answerThreeLabel").html(store.questions[currentQuestion].options[2]);
    $("#answerFourLabel").html(store.questions[currentQuestion].options[3]);
}


let answerSelected = ""
//only works when you click, doesn't work for auto loaded checked box
//might need to find a different way to do this...
/////$("#selection-form").on("submit", function(e){
/////console.log($('input[name="radioButtons"]:checked').find("label").text());
//})
//also moved button out of form and took out type="submit"
//auto filled box also moves?
$("#answer-selections").on("click","label", function(e){
    // e.preventDefault();
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


//question functionality
function loadQuestion() {
    $("#question-line").html(store.questions[currentQuestion].question);
    isLastQuestion();
}

function isLastQuestion(){
    if (currentQuestion === store.questions.length-1){
        renderResults();
    } else {
        console.log("not last question");
    }
}

function renderResults(){
    console.log("here's your results!")
    //finish this code going off next question button to results page
    $(".correct-incorrect").hide();
    $(".question-div").hide();
    $(".results").show();
    finalScore();
}

function increaseQuestionNumber(){
    currentQuestion++;
    return currentQuestion;
}

function loadQuestionNumber(){
    $(".question-number").html("Current Question: " + currentQuestion + "/" + store.questions.length);
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
    $("#final-score").html("Your final score is " + score + " of " + store.questions.length + " correct.");
}

function scoreReset(){
    score = 0;
    return score;
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
