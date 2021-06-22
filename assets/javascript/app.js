// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that
// players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
// When a player clicks on the Start button hide the button and show time remaining and questions


var number = 1000;
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

        $("#results").html("<h2> Time's Up! </h2>");
    }
}
// Function to clear timer
function stop() {
    clearInterval(intervalId);
}

//Question & Answer Array
var myQuestions = [{
        question: "What is the capital of Alabama?",
        answers: {
            a: "Birmingham",
            b: "Mobile",
            c: "Auburn",
            d: "Montgomery"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Alaska?",
        answers: {
            a: "Sitka",
            b: "Juneau",
            c: "Anchorage",
            d: "Fairbanks"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Arkansas?",
        answers: {
            a: "Fayetteville",
            b: "Hot Springs",
            c: "Little Rock",
            d: "Bentonville"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of California?",
        answers: {
            a: "Sacramento",
            b: "Los Angeles",
            c: "San Francisco",
            d: "San Diego"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Colorado?",
        answers: {
            a: "Boulder",
            b: "Denver",
            c: "Colorado Springs",
            d: "Durango"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Connecticut?",
        answers: {
            a: "Stamford",
            b: "New Haven",
            c: "Hartford",
            d: "Danbury"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Delaware?",
        answers: {
            a: "Wilmington",
            b: "Newark",
            c: "Delaware City",
            d: "Dover"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Florida?",
        answers: {
            a: "Tallahassee",
            b: "Miami",
            c: "Orlando",
            d: "Tampa"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Georgia?",
        answers: {
            a: "Savannah",
            b: "Atlanta",
            c: "Augusta",
            d: "Athens"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Hawaii?",
        answers: {
            a: "Pearl City",
            b: "Waikiki",
            c: "Oahu",
            d: "Honolulu"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Idaho?",
        answers: {
            a: "Boise",
            b: "Coeur d'Alene",
            c: "Twin Falls",
            d: "Meridian"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Illinois?",
        answers: {
            a: "Peoria",
            b: "Chicago",
            c: "Springfield",
            d: "Rockford"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Indiana?",
        answers: {
            a: "Evansville",
            b: "Indianapolis",
            c: "South Bend",
            d: "Fort Wayne"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Iowa?",
        answers: {
            a: "Iowa City",
            b: "Cedar Rapids",
            c: "Des Moines",
            d: "Davenport"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Kansas?",
        answers: {
            a: "Topeka",
            b: "Wichita",
            c: "Lawrence",
            d: "Kansas City"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Kentucky?",
        answers: {
            a: "Elizabethtown",
            b: "Frankfort",
            c: "Lexington",
            d: "Louisville"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Louisiana?",
        answers: {
            a: "Lafayette",
            b: "Shreveport",
            c: "New Orleans",
            d: "Baton Rogue"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Maine?",
        answers: {
            a: "Portland",
            b: "Augusta",
            c: "Bangor",
            d: "Kennebunkport"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Maryland?",
        answers: {
            a: "Baltimore",
            b: "Annapolis",
            c: "Rockville",
            d: "Bethesda"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Massachusetts?",
        answers: {
            a: "Boston",
            b: "Salem",
            c: "Plymouth",
            d: "Worcester"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Michigan?",
        answers: {
            a: "Grand Rapids",
            b: "Detroit",
            c: "Lansing",
            d: "Ann Arbor"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Minnesota?",
        answers: {
            a: "Duluth",
            b: "Minnesota City",
            c: "Minneapolis",
            d: "Saint Paul"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Mississippi?",
        answers: {
            a: "Biloxi",
            b: "Gulfport",
            c: "Hattiesburg",
            d: "Jackson"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Missouri?",
        answers: {
            a: "Columbia",
            b: "St. Louis",
            c: "Jefferson City",
            d: "Kansas City"
        },
        correctAnswer: "c"
    },
    {
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
        question: "What is the capital of Nebraska?",
        answers: {
            a: "Lincoln",
            b: "Omaha",
            c: "Norfolk",
            d: "Bellevue"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Nevada?",
        answers: {
            a: "Las Vegas",
            b: "Reno",
            c: "Henderson",
            d: "Carson City"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of New Hampshire?",
        answers: {
            a: "Concord",
            b: "Manchester",
            c: "Nashua",
            d: "Keene"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of New Jersey?",
        answers: {
            a: "Newark",
            b: "Jersey City",
            c: "Princeton",
            d: "Trenton"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of New Mexico?",
        answers: {
            a: "Taos",
            b: "Santa Fe",
            c: "Albuquerque",
            d: "Las Cruces"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of New York?",
        answers: {
            a: "Buffalo",
            b: "New York City",
            c: "Albany",
            d: "Syracuse"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of North Carolina?",
        answers: {
            a: "Raleigh",
            b: "Charlotte",
            c: "Asheville",
            d: "Wilmington"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of North Dakota?",
        answers: {
            a: "Grand Forks",
            b: "Fargo",
            c: "Bismark",
            d: "Williston"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Ohio?",
        answers: {
            a: "Toledo",
            b: "Cincinnati",
            c: "Cleveland",
            d: "Columbus"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Oklahoma?",
        answers: {
            a: "Stillwater",
            b: "Oklahoma City",
            c: "Tulsa",
            d: "Edmond"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Oregon?",
        answers: {
            a: "Salem",
            b: "Bend",
            c: "Portland",
            d: "Eugene"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Pennsylvania?",
        answers: {
            a: "Scranton",
            b: "Pittsburgh",
            c: "Harrisburg",
            d: "Philadelphia"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Rhode Island?",
        answers: {
            a: "Providence",
            b: "Newport",
            c: "Bristol",
            d: "Warwick"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of South Carolina?",
        answers: {
            a: "Myrtle Beach",
            b: "Charleston",
            c: "Greenville",
            d: "Columbia"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of South Dakota?",
        answers: {
            a: "Sioux Falls",
            b: "Rapid City",
            c: "Pierre",
            d: "Deadwood"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Tennessee?",
        answers: {
            a: "Memphis",
            b: "Nashville",
            c: "Knoxville",
            d: "Franklin"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Texas?",
        answers: {
            a: "Houston",
            b: "Dallas",
            c: "Austin",
            d: "San Antonio"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Utah?",
        answers: {
            a: "Moab",
            b: "Provo",
            c: "St. George",
            d: "Salt Lake City"
        },
        correctAnswer: "d"
    },
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
    };

    //show the questions
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
        stop();
        $("#time-left").hide();
    }
};