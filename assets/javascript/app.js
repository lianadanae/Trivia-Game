// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that
// players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
// When a player clicks on the Start button hide the button and show time remaining and questions


var number = 100;
var intervalId;

// Hide the submit button
$("#submit").hide();

//When start button is clicked, hide start button and generate quiz questions
$("#start").on("click", function () {
    $("#start").hide();

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)
    $("#submit").show();
    run();
});


// Function to start timer
function run() {
    intervalId = setInterval(decrement, 1000);
}

// Function to decrease timer and when timer stops show message "All done!"
function decrement() {

    number--;

    $("#time-left").html("<h2>Time Remaining: " + number + " Seconds</h2>");

    if (number === 0) {

        stop();

        $("#results").html("<h2> All Done! </h2>");
    }
}
// Function to clear timer
function stop() {
    clearInterval(intervalId);
}

//Question & Answer Array
var myQuestions = [{
        question: "What is the capital of Montana?",
        answers: {
            a: "Billings",
            b: "Helena",
            c: "Bozeman",
            d: "Missoula"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Mississippi?",
        answers: {
            a:"Biloxi",
            b:"Gulfport",
            c:"Hattiesburg",
            d:"Jackson"
        },
        correctAnswer: "d"
    },

    {
        question: "What is the capital of Missouri?",
        answers: {
            a:"Columbia",
            b:"St. Louis",
            c:"Jefferson City",
            d:"Kansas City"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Maryland?",
        answers: {
            a:"Baltimore",
            b:"Annapolis",
            c:"Rockville",
            d:"Bethesda"
        },
        correctAnswer: "b"
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


//Function to generate the quiz questions
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        //store the output and the answer choices
        var output = [];
        var answers;

        // for each question
        for (var i = 0; i < questions.length; i++) {
            //reset the list of answers
            answers = [];
            //
            for (correctAnswer in questions[i].answers) {
                //add an html radio button
                answers.push(
                    `<label><input type="radio" name="question${i}" value="${correctAnswer}">${correctAnswer}: ${questions[i].answers[correctAnswer]}</label>`
                );
            }
            //add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        //combine output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' correct ' + questions.length + ' incorrect ';
    }

    //show the questions
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
        stop();
        $("#time-left").hide();
    }

    
}