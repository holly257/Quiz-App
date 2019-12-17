let currentQuestion = 0;
let score = 0;


$("#start").on("click", function(e){
    $(".homeScreen").hide();
    $(".question-div").show();

    loadQuestion();
    console.log(loadChoices());
});

function loadQuestion() {
    return store.questions[currentQuestion].question;
}

// function assignChoices(){
//     let choiceOne = store.questions[currentQuestion].options[0];
//     let choiceTw0 = store.questions[currentQuestion].options[1];
//     let choiceThree = store.questions[currentQuestion].options[2];
//     let choiceFour = store.questions[currentQuestion].options[3];
// }

function loadChoices(){
    // assignChoices();
    // document.getElementById("answerOneLabel").innerText=choiceOne;
    $(".answerOneLabel").html(store.questions[currentQuestion].options[0]);
}




$("#submit-button").on("click", function(e){
    $(".question-div").hide();
    $(".correct-incorrect").show();
    correctOrNot();
    //need to update score to new score
    
})

function correctOrNot() {
    //how do I check against the correct value?
    if ($('input[radioButtons]:checked').val() === store.questions[currentQuestion].answer) {
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
